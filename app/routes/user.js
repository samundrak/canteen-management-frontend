import Ember from 'ember';

export default Ember.Route.extend({
  model({ user_id }) {
    return this.get('store').findRecord('user', user_id);
  }
});
