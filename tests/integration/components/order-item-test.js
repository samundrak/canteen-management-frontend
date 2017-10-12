import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('order-item', 'Integration | Component | order item', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('order', {
    shift: 'morning',
    status: 'approved',
    food: {
      name: 'momo',
      price: 10,
    },
  });

  // Template block usage:
  this.render(hbs`
    {{#order-item order=order}}
      template block text
    {{/order-item}}
  `);

  assert.equal(this.$('.orders li:first').text().trim(), 'Food: momo');
  assert.equal(this.$('.orders li:nth-child(2)').text().trim(), 'Shift: morning');
  assert.equal(this.$('.orders li:nth-child(3)').text().trim(), 'Status: approved');
});
