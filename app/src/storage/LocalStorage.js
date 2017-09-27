class LocalStorage {

  get(key) {
    return window.localStorage.getItem(key);
  }

  set(key, value) {
    window.localStorage.setItem(key, value);
    return this;
  }

  remove(key) {
    return window.localStorage.removeItem(key);
  }

  static isAvailable() {
    return window.localStorage;
  }
}

export default LocalStorage;
