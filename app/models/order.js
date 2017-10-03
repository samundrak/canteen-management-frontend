import DS from 'ember-data';

const { attr, belongsTo } = DS;
export default DS.Model.extend({
  user_id: belongsTo('user'),
  food_id: belongsTo('food'),
  shift: attr('string'),
  status: attr('string'),
  created_at: attr('string'),
  user: attr(),
  food: attr(),
});
