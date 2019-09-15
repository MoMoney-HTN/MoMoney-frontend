import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '' });
  this.route('welcome', { path: '/welcome' });
  this.route('new-expense');
  this.route('transaction-screen');
});

export default Router;
