export default {
  name: 'background',
  initialize: function backgroundInitialize(container) {
    var backgroundPage = {};

    if (window.chrome.extension) {
      backgroundPage = window.chrome.extension.getBackgroundPage();
    }

    container.register('chrome:background-page', backgroundPage, { singleton: true, instantiate: false });
    container.injection('controller', 'background', 'chrome:background-page');
    container.injection('route', 'background', 'chrome:background-page');
  }
};
