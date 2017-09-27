import Ember from 'ember';
import Validator from 'npm:validatorjs';

export default Ember.Service.extend({

  validate(data, rules, customErrorMessage = {}) {
    const validation = new Validator(data, rules, customErrorMessage);
    return {
      status: validation.passes(),
      errors: validation.errors.errors,
    };
  }
});
