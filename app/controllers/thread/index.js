import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['thread'], // to access the thread id

  // template bindings
  message: null,

  // private

  actions: {
    sendMessage: function () {
      if (this.get('message').trim() === '') {
        return;
      }

      var thread = this.get('controllers.thread.model');

      var message = this.store.createRecord('message', {
        thread: thread,
        body: this.get('message'),
        timestamp: new Date()
      });

      message.save().then(function (msg) {
        this.get('model').pushObject(msg);
      }.bind(this));
    }
  }
});
