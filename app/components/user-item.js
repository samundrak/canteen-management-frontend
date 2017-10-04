import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleRoleChange(role, user) {
      this.sendAction('handleRoleChange', role, user);
    },
  },
});
