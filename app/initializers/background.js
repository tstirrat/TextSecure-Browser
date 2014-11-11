export default {
  name: 'background',
  initialize: function backgroundInitialize(app, container) {
    var backgroundPage = {};

    if (window.chrome.extension) {
      backgroundPage = window.chrome.extension.getBackgroundPage();
    }

    container.register('chrome:background-page', backgroundPage, { singleton: true, instantiate: false });
    container.inject('controller', 'background', 'chrome:background-page');
    container.inject('route', 'background', 'chrome:background-page');
  }
};
