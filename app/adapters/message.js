import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  keyPrefix: 'thread.id', // prepend thread id to storage key

  generateIdForRecord: function () {
    return this.uuid();
  },

  uuid: function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      /* jshint eqeqeq: false */
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

});
