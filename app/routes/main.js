import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('thread');
  },

  actions: {
    goToThread: function (thread) {
      this.transitionTo('thread', thread);
    }
  }
});
