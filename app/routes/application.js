import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model() {
    return {};
  },
  beforeModel() {
    const auth = this.get('auth');
    if (!auth.getToken()) {
      return this.replaceWith('login');
    }

    auth.ping()
      .then(({ data }) => {
        auth.setUser(data.user);
        return this.replaceWith('login');
      })
      .catch(() => {
        return this.replaceWith('login');
      });
  }
});
