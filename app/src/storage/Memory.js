class Memory {
  constructor() {
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    return this;
  }

  remove(key) {
    return delete this.data[key];
  }
}

export default Memory;
