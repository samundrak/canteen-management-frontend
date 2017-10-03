import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('food');
  },
  actions: {
    handleFoodOrder(shift, food) {
      console.log(shift, food);
    },
  },
});
