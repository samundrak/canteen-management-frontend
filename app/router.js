import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('profile');
  });
  this.route('login');
  this.route('register');
  this.route('foods');
  this.route('orders');
  this.route('users');
  this.route('me');
});

export default Router;
