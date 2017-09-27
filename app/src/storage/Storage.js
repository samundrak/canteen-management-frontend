import Memory from './Memory';
import LocalStorage from './LocalStorage';

class Storage {

  constructor() {
    this.service = new Memory();
  }

  setService(service) {
    switch (service) {
      case 'memory':
        this.service = new Memory();
        break;
      case 'local':
        this.service = new LocalStorage();
        break;
      default:
        this.service = new Memory();
    }

    return this.service;
  }

  get(key) {
    this.service.get(key);
  }

  set(key, value) {
    this.service.set(key, value);
  }

  remove(key) {
    this.service.remove(key);
  }

  static isLocalAvialable() {
    return LocalStorage.isAvailable();
  }
}

Storage.MEMORY = 'memory';
Storage.LOCAL = 'local';

export default Storage;
