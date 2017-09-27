import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      credentials: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
      },
      errors: {
        first_name: [],
        last_name: [],
        email: [],
        password: [],
      },
    };
  }
});
