import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleCancelOrder(order) {
      this.sendAction('handleCancelOrder', order);
    },
    handleStatusChange(order, status) {
      this.sendAction('handleStatusChange', order, status);
    },
  },
});
