import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      food: {
        name: null,
        price: 0,
        description: null,
      },
      errors: {},
    };
  },
});
