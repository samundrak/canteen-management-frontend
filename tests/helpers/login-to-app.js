import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('loginToApp',
  function (app, assert) {
    visit('/login');
    andThen(function () {
      assert.equal(currentURL(), '/login');
      fillIn('input[name=email]', 'admin@gmail.com');
      fillIn('input[name=password]', '12345678');
      click('button[name=submit]');
      setTimeout(() => {
        assert.equal(currentURL(), '/');
      }, 4000);
    });
  });
