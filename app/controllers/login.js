import Ember from 'ember';

const LOGIN_RULES = {
  email: 'required|email',
  password: 'required|min:8|max:30',
};

export default Ember.Controller.extend({
  auth: Ember.inject.service(),
  api: Ember.inject.service(),
  validator: Ember.inject.service(),
  isSubmitting: false,
  validate(credentials) {
    const validate = this.get('validator').validate(credentials, LOGIN_RULES);
    this.set('model.errors', validate.errors);
    return validate.status;
  },
  actions: {
    handleLogin() {
      if (this.isSubmitting) {
        return false;
      }
      const auth = this.get('auth');
      const credentials = this.get('model.credentials');
      if (!this.validate(credentials)) {
        return false;
      }
      this.toggleProperty('isSubmitting');
      return auth.login(credentials)
        .then(({ data }) => {
          auth.setToken(data.token);
          alertify.notify('You have been logged in.');
          setTimeout(() => (window.location.href = '/'), 2000);
          this.toggleProperty('isSubmitting');
        })
        .catch((err) => {
          alertify.notify(err.response.data.message, 'error');
          (err.response.data.data || []).forEach(message => alertify.notify(message, 'error'));
          this.toggleProperty('isSubmitting');
        });
    },
  },
});
