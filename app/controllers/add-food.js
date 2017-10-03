import Ember from 'ember';

const FOOD_RULES = {
  name: 'required',
  price: 'required',
  description: 'required',
};
export default Ember.Controller.extend({
  api: Ember.inject.service(),
  validator: Ember.inject.service(),
  validate(credentials) {
    const validate = this.get('validator').validate(credentials, FOOD_RULES);
    this.set('model.errors', validate.errors);
    return validate.status;
  },
  actions: {
    handleAddFood() {
      const food = this.get('model.food');
      if (!this.validate(food)) {
        return false;
      }
      return this.get('api')
        .addFood(food)
        .then(() => {
          alertify.notify('Food Item has been added.');
          this.transitionToRoute('foods');
        })
        .catch((err) => {
          alertify.notify(err.response.data.message, 'error');
          (err.response.data.data || []).forEach(message => alertify.notify(message, 'error'));
        });
    },
  }
});
