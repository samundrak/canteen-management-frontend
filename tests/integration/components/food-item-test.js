import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('food-item', 'Integration | Component | food item', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('food', {
    name: 'momo',
    price: 10,
    description: 'good food',
  });

  // Template block usage:
  this.render(hbs`
    {{#food-item food=food}}
      template block text
    {{/food-item}}
  `);

  assert.equal(this.$('.foods li:first').text().includes('momo'), true);
  assert.equal(this.$('.foods li:nth-child(2)').text().includes(10), true);
  assert.equal(this.$('.foods li:last').text().includes('good food'), true);
});
