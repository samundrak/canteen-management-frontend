import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loading-dimmer', 'Integration | Component | loading dimmer', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('status', true);
  this.render(hbs`{{loading-dimmer status=status}}`);

  assert.equal(this.$('.loader').length, true);

  this.set('status', false);
  this.render(hbs`{{loading-dimmer status=status}}`);
  assert.equal(this.$('.loader').length, false);

});
