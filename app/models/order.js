import DS from 'ember-data';

const { attr, belongsTo } = DS;
export default DS.Model.extend({
  user_id: belongsTo('user'),
  food_id: attr('string'),
  shift: attr('string'),
  status: attr('string'),
});
