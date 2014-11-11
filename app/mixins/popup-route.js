import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({
  popupWidth: 280,
  popupType: 'panel',

  beforeModel: function (transition) {
    //
    if (transition.sequence !== 0 && window.chrome.windows) {
      transition.abort();

      var routePath = this.popupUrl(transition);

      var panels = this.get('background').extension.panels;
      
      panels.create(routePath, {
        type: this.get('popupType'),
        url: config.baseURL + 'index.html' + routePath,
        width: this.get('popupWidth')
      });
    }
  },

  popupUrl: function (transition) {
    return this.router.generate(transition.intent.name, transition.intent.contexts[0]);
  }
});
