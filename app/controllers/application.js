import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),
  session: null,
  actions: {
    handleLogout() {
      this.get('auth').logout()
        .then(() => {
          window.location.href = '/login';
        })
        .catch(() => {
          alertify.notify('Unable to log out, please try again.', 'error');
        });
    },
  },
});
