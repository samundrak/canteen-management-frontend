import { test } from 'qunit';
import moduleForAcceptance from 'canteen-ms-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list foods');

test('visiting /foods', function (assert) {
  loginToApp();
  visit('/foods');

  andThen(function () {
    assert.equal(currentURL(), '/foods');
    console.log(find('ul.list-group li'));
  });
});
