import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  auth: Ember.inject.service(),
  queryRecord(modelName, query) {
    return this.get('auth').ping()
      .then(({ data }) => data)
  },
});
