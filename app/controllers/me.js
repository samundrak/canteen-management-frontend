import Ember from 'ember';

const UPDATE_RULES = {
  first_name: 'required',
  last_name: 'required',
};

export default Ember.Controller.extend({
  api: Ember.inject.service(),
  validator: Ember.inject.service(),
  validate(credentials) {
    const validate = this.get('validator').validate(credentials, UPDATE_RULES);
    this.set('model.errors', validate.errors);
    return validate.status;
  },
  actions: {
    handleUpdate() {
      const user = this.get('model.user');
      if (!this.validate(user)) {
        return false;
      }
      return this.get('api')
        .updateProfile(user._id, {
          first_name: user.first_name,
          last_name: user.last_name,
        })
        .then(() => {
          alertify.notify('Profile has been update successfully.', 'success');
        })
        .catch(() => {
          alertify.notify('Unable to update profile.', 'error');
        });
    },

  },
});
