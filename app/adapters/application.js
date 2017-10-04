import Ember from 'ember';
import DS from 'ember-data';
import config from 'canteen-ms-frontend/config/environment';

export default DS.JSONAPIAdapter.extend({
  auth: Ember.inject.service('auth'),
  host: `${config.APP.apiHost}/api/auth`,
  headers: {
    Authorization: `JWT ${window.token}`,
  },
});
