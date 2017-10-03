import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model() {
    return RSVP.hash({
      foods: this.get('store').findAll('food'),
      session: this.modelFor('application').session,
      isAdministrator: Ember.computed('session', function () {
        return this.session.role === 'admin' || this.session.role === 'owner';
      }),
    })
  },
  actions: {
    handleFoodOrder(shift, food) {
      this.get('api').makeOrder({
        food_id: food.id,
        shift,
      })
        .then(() => {
          alertify.notify('Your order has been placed successfully.');
        })
        .catch((error) => {
          alertify.notify(error.response.data.message, 'error');
        })
    },
  },
});
