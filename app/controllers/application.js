import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),
  user: Ember.computed('auth', function () {
    return this.get('auth').getUser();
  }),
});
