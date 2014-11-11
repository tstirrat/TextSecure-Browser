import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['single-message', 'clearfix'],
  classNameBindings: ['isOutgoing:outgoing'],

  // bindable
  contact: null,
  type: null,

  // private
  isOutgoing: function () {
    return this.get('type') === 'outgoing';
  }.property('type')
});
