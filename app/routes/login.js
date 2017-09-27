import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      credentials: {
        email: null,
        password: null,
      },
      errors: {
        email: [],
        password: [],
      },
    };
  }
});
