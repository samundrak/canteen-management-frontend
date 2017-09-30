import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  auth: Ember.inject.service('auth'),
  host: 'http://localhost:3000/api/auth',
  headers: {
    Authorization: `JWT ${window.token}`,
  },
});
