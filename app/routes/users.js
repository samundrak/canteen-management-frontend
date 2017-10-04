import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      users: this.get('store').findAll('user'),
      session: this.modelFor('application').session,
      isAdministrator: Ember.computed('session', function () {
        return this.session.role === 'admin' || this.session.role === 'owner';
      }),
    })
  },
  afterModel({ session }) {
    if (session.role === 'user') {
      this.transitionTo('index');
    }
  },
  actions: {
    handleRoleChange(role, user) {
      this.get('store')
        .findRecord('user', user.id, { backgroundReload: false })
        .then(function (user) {
          user.set('role', role);
          user.save()
            .then(() => {
              alertify.notify('User updated successfully.');
            })
            .catch(() => {
              alertify.notify('Unable to update user.', 'error');
            });
        })
        .catch(() => {
          alertify.notify('Unable to  update user.', 'error');
        });
    },
  },
});
