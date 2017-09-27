import Ember from 'ember';
import Storage from '../src/storage/Storage';

export default Ember.Service.extend({
  init() {
    const storage = new Storage();
    if (Storage.isLocalAvialable()) {
      storage.setService(Storage.LOCAL);
    } else {
      storage.setService(Storage.MEMORY);
    }
    this.set('storage', storage);
  },
  getItem(key) {
    this.get('storage').get(key);
  },
  setItem(key, value) {
    this.get('storage').set(key, value);
  },
  remove(key) {
    this.get('storage').remove(key);
  }
});
