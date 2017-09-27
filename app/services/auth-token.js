import Ember from 'ember';
import Storage from '../src/storage/Storage';
import LocalStorage from '../src/storage/LocalStorage';

export default Ember.Service.extend({
  init() {
    const storage = new Storage();
    if (LocalStorage.isAvailable()) {
      this.set('storage', storage.setService(Storage.LOCAL));
    } else {
      this.set('storage', storage.setService(Storage.MEMORY));
    }
  },
  get() {

  },
  set() {

  },
  remove() {

  }
});
