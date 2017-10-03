import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleFoodOrder(shift, food) {
      this.sendAction('handleFoodOrder', shift, food);
    },
  },
});
