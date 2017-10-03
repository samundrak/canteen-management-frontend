import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  price: attr('number'),
  description: attr('string'),
});
