import { test } from 'qunit';
import moduleForAcceptance from 'canteen-ms-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | register');

test('visiting /register', function (assert) {
  visit('/login');

  andThen(function () {
    click('.registerUrl');
    andThen(() => {
      assert.equal(currentURL(), '/register');
      fillIn('input[name=first_name]', 'Samundra');
      fillIn('input[name=last_name]', 'khatri');
      fillIn('input[name=email]', `samundrak_${Date.now()}@yopmail.com`);
      fillIn('input[name=password]', '12345678');
      click('button[name=submit]');
      setTimeout(() => {
        assert.equal(currentURL(), '/login');
      }, 3000);
    });
  });
});
