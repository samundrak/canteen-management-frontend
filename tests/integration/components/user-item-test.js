import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-item', 'Integration | Component | user item', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('user', {
    first_name: 'samundra',
    last_name: 'khatri',
    role: 'admin',
  });
  this.render(hbs`{{user-item user=user}}`);

  assert.equal(this.$('.user li:first a').text().trim(), 'samundra khatri');
  assert.equal(this.$('.user li:nth-child(2)').text().trim(), 'Role: admin');
});
