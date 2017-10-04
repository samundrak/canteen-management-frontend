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

      return this.get('api')
        .updateOrder(order.id, {
          status,
          shift: order.get('shift'),
          food_id: order.get('food')._id,
        })
        .then(() => {
          alertify.notify('Status changed successfully');
          this.get('store')
            .findRecord('order', order.id, { backgroundReload: false })
            .then((orderModel) => {
              orderModel.set('status', status);
            })
            .catch((e) => {
              throw new Error(e);
            });
        })
        .catch((err) => {
          if (err.response && err.response.data.message) {
            return alertify.notify(err.response.data.message, 'error');
          }
          return alertify.notify('Sorry, unable to change status, please try again.', 'error');
        });

    },
    handleCancelOrder(order) {
      this.get('store')
        .findRecord('order', order.id, { backgroundReload: false })
        .then(function (order) {
          order.deleteRecord();
          order.save()
            .then(() => {
              alertify.notify('Your order has been successfully cancelled');
            })
            .catch((e) => {
              console.log(e);
              alertify.notify("You can't remove this order as it has been already processed.", "error");
            });
        })
        .catch((err) => {
          return alertify.notify(err.message, 'error');
        });
    }
  }
});
