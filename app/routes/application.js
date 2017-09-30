import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model() {
    return RSVP.hash({
      session: this.get('auth').ping()
        .then(({ data }) => data)
        .catch(() => {
          return this.replaceWith('login');
        }),
    });
  },
  beforeModel() {
    const auth = this.get('auth');
    if (!auth.getToken()) {
      return this.replaceWith('login');
    }
  },
  setupController: function (controller) {
    const auth = this.get('auth');
    auth.ping()
      .then(({ data }) => {
        auth.setUser(data);
        Object.defineProperty(window, 'token', {
          enumerable: false,
          configurable: false,
          value: auth.getToken(),
        });
        controller.set("session", data);
        return this.replaceWith('index');
      })
      .catch(() => {
        Object.defineProperty(window, 'token', {
          enumerable: false,
          configurable: false,
          value: null,
        });
        controller.set("session", null);
        return this.replaceWith('login');
      });
  },
});
