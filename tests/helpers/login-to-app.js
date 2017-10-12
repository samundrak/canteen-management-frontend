import Ember from 'ember';

export default Ember.Test.registerHelper('loginToApp',
  function (app, assert) {
    visit('/login');
    andThen(function () {
      fillIn('input[name=email]', 'admin@gmail.com');
      fillIn('input[name=password]', '12345678');
      click('button[name=submit]');
    });
  });
