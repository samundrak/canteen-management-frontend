import Ember from 'ember';
import axios from 'npm:axios';
import config from 'canteen-ms-frontend/config/environment';

const validateStatus = function validateStatus(status) {
  return status >= 200 && status <= 299; // default
};

export default Ember.Service.extend({
  host: config.APP.apiHost,
  authenticate: Ember.inject.service('auth'),
  auth: function api() {
    return axios.create({
      baseURL: `${this.get('host')}/api/auth`,
      headers: {
        Authorization: `JWT ${this.get('authenticate').getToken()}`,
      },
      validateStatus,
    });
  },
  api: function api() {
    return axios.create({
      baseURL: `${this.get('host')}/api`,
      validateStatus,
    });
  },
});
