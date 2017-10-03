import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  created_at: DS.attr('date'),
  role: DS.attr('string'),
  fullName: Ember.computed('first_name', 'last_name', function () {
    return `${this.get('first_name')} ${this.get('last_name')}`;
  }),
});
