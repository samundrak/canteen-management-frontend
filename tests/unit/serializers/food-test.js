import { moduleForModel, test } from 'ember-qunit';

moduleForModel('food', 'Unit | Serializer | food', {
  // Specify the other units that are required for this test.
  needs: ['serializer:food']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
