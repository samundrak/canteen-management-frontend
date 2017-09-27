import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  beforeModel() {
    if (!this.get('auth').getToken()) {
      return this.replaceWith('login');
    }
  }
});
