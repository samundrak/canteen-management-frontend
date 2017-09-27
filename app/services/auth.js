import Ember from 'ember';
import { login, register } from '../src/api/calls';

export default Ember.Service.extend({
  storage: Ember.inject.service('storage'),
  getToken() {
    return this.get('storage').getItem('token');
  },
  setToken(token) {
    return this.get('storage').setItem('token', token);
  },
  login(credentials) {
    return login(credentials);
  },
  register(credentials) {
    return register(credentials);
  },
  user() {

  },
  logout() {

  },
});
