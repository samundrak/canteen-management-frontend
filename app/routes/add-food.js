import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      food: {
        name: null,
        price: 10,
        description: null,
      },
      errors: {},
    };
  },
  afterModel() {
    const session = this.modelFor('application').session;
    if (session.role === 'user') {
      this.transitionTo('index');
    }
  }
});
