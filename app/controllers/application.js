import Ember from 'ember';

export default Ember.Controller.extend({
  beforeModel() {
    console.log(1);
  }
});
