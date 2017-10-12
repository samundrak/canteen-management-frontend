import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-field', 'Integration | Component | form field', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  this.set('errors', ['first name is required']);
  this.render(hbs`
    {{#form-field label="first name" errors=errors}}
      <input name="first_name" type="test" />
    {{/form-field}}
  `);

  assert.equal(this.$('label').text().trim(), 'first name:');
  assert.equal(this.$('input').attr('name'), 'first_name');
  assert.equal(this.$('.message:first').text().trim(), 'first name is required');
});
