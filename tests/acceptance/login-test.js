import { test } from 'qunit';
import moduleForAcceptance from 'canteen-ms-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function (assert) {
  visit('/login');

  andThen(function () {
    assert.equal(currentURL(), '/login');
    fillIn('input[name=email]', 'admin@gmail.com');
    fillIn('input[name=password]', '12345678');
    click('button[name=submits]');
    setTimeout(() => {
      assert.equal(currentURL(), '/');
    }, 4000);
  });
});
