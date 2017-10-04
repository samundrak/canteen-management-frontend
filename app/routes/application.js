/* global Promise */
import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model() {
    return RSVP.hash({
      session: this.get('store')
        .queryRecord('user', {})
        .then(({ data }) => data)
        .catch(() => Promise.resolve(null)),
      isAdministrator: Ember.computed('session', function () {
        return this.session.role === 'admin' || this.session.role === 'owner';
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
    if (session && !session.email) {
      Object.defineProperty(window, 'token', {
        enumerable: false,
        configurable: false,
        value: null,
      });
      return this.replaceWith('login');
    }
    Object.defineProperty(window, 'token', {
      enumerable: false,
      configurable: false,
      value: auth.getToken(),
    });
    auth.setUser(session);
  },
});
