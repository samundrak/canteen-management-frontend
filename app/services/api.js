import Ember from 'ember';
import * as API from '../src/api/index';

export default Ember.Service.extend({
  httpClient: Ember.inject.service('http-client'),
  init() {
    this.createBasicApi();
    this.createAuthApi();
  },
  createBasicApi() {
    if (!this.get('httpClientAPI')) {
      this.set('httpClientAPI', this.get('httpClient').api());
    }
  },
  createAuthApi(reload = false) {
    if (reload || !this.get('httpClientAuth')) {
      this.set('httpClientAuth', this.get('httpClient').auth());
    }
  },
  login(credentials) {
    return this.get('httpClientAPI').post(API.LOGIN, credentials)
  },
  register(credentials) {
    return this.get('httpClientAPI').post(API.REGISTER, credentials);
  },
  profile() {
    return this.get('httpClientAuth').get(API.PROFILE);
  },
  updateProfile(userId, payload) {
    return this.get('httpClientAuth').put(`${API.USERS}/${userId}`, payload);
  }
});
