import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:add-food', 'Unit | Controller | add food', {
  // Specify the other units that are required for this test.
  needs: ['service:api', 'service:validator', 'service:http-client', 'service:auth', 'service:storage']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
  Ember.run(() => {
    controller.set('model', Ember.Object.create({
      food: {
        name: 'momo',
        price: 10,
        description: 'very good food',
      },
      errors: {},
    }));
    controller.send('handleAddFood');
    assert.equal(controller.get('model.food.name'), 'momo', 'name is set');
    assert.equal(controller.get('model.food.price'), 10, 'price is set');
    assert.equal(controller.get('model.food.description'), 'very good food', 'description is set');

    assert.equal(controller.get('model.errors').hasOwnProperty('name'), false);
    assert.equal(controller.get('model.errors').hasOwnProperty('price'), false);
    assert.equal(controller.get('model.errors').hasOwnProperty('description'), false);
  });
});
