import Ember from 'ember';
import PopupRouteMixin from '../../mixins/popup-route';

export default Ember.Route.extend(PopupRouteMixin, {
  model: function () {
    var thread = this.modelFor('thread');
    return this.store.find('message', { threadId: thread.get('id') });
  },

  afterModel: function (model) {
    var name = this.modelFor('thread').get('name');
    if (name) {
      window.document.title = name;
    }
    return model;
  }
});
