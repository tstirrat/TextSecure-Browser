import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', { path: '/' });
  this.resource('thread', { path: 'thread/:thread_id' }, function() {
    this.route('attach');
  });
});

export default Router;
