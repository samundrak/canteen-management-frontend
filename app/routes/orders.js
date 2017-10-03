import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model() {
    return RSVP.hash({
      orders: this.get('store').findAll('order'),
      session: this.modelFor('application').session,
      isAdministrator: Ember.computed('session', function () {
        return this.session.role === 'admin' || this.session.role === 'owner';
      }),
    })
  },
  actions: {
    handleStatusChange(order, status) {
      this.get('store')
        .findRecord('order', order.id, { backgroundReload: false })
        .then((orderModel) => {
          orderModel.set('status', status);
          return this.get('api')
            .updateOrder(order.id, {
              status,
              shift: order.get('shift'),
              food_id: order.get('food')._id,
            })
            .then(() => {
              alertify.notify('Status changed successfully');
            })
            .catch((err) => {
              throw new Error(err);
            });
        })
        .catch((e) => {
          console.log(e);
          alertify.notify('Sorry, unable to change status, please try again.', 'error');
        });
    },
    handleCancelOrder(order) {
      this.get('store')
        .findRecord('order', order.id, { backgroundReload: false })
        .then(function (order) {
          order.deleteRecord();
          order.save();
          alertify.notify('Your order has been successfully cancelled');
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            return alertify.notify(err.response.data.message, 'error');
          }
          return alertify.notify('Unable to cancel order, Please try again.', 'error');
        });
    }
  }
});
