/* global Promise */
import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model() {
    return RSVP.hash({
      session: this.get('auth').ping()
        .then(({ data }) => data)
        .catch(() => {
          return Promise.resolve(null);
        }),
    });
  },
  beforeModel() {
    const auth = this.get('auth');
    if (!auth.getToken()) {
      return this.replaceWith('login');
    }
  },
  afterModel({ session }) {
    const auth = this.get('auth');
    Object.defineProperty(window, 'token', {
      enumerable: false,
      configurable: false,
      value: auth.getToken(),
    });
    if (session && !session._id) {
      Object.defineProperty(window, 'token', {
        enumerable: false,
        configurable: false,
        value: null,
      });
      return this.replaceWith('login');
    }
    auth.setUser(session);
  },
});
