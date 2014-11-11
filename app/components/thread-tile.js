import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: [ 'thread-tile', 'clearfix' ],

  // bindings
  thread: null,
  action: null,

  click: function () {
    this.sendAction('action', this.get('thread'));
  }
});
