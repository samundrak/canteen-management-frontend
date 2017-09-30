/* global Promise */
import Ember from 'ember';

export default Ember.Service.extend({
  api: Ember.inject.service(),
  storage: Ember.inject.service('storage'),
  user: null,
  getToken() {
    return this.get('storage').storage.get('token');
  },
  setToken(token) {
    return this.get('storage').setItem('token', token);
  },
  login(credentials) {
    return this.get('api').login(credentials);
  },
  register(credentials) {
    return this.get('api').register(credentials);
  },
  getUser() {
    return this.get('user');
  },
  setUser(user) {
    return this.set('user', user);
  },
  ping() {
    return this.get('api').profile();
  },
  logout() {
    this.get('storage').remove('token');
    return Promise.resolve();
  },
});
