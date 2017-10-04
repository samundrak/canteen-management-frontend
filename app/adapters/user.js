import Ember from 'ember';
import ApplicationAdapter from './application';
import Storage from '../src/storage/Storage';

export default ApplicationAdapter.extend({
  auth: Ember.inject.service(),
  headers: {
    Authorization: `JWT ${Storage.getInstance().setService(Storage.LOCAL).get('token')}`,
  },
  queryRecord() {
    return this.get('auth').ping()
      .then(({ data }) => data)
  },
});
