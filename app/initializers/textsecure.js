export default {
  name: 'textsecure',
  after: 'background',
  initialize: function textsecureInitialize(container, app) {
    var textsecure = {};

    var bg = container.lookup('chrome:background-page');

    if (bg) {
      textsecure = bg.textsecure;
    }

    container.register('background:textsecure', textsecure, { singleton: true, instantiate: false });
    container.injection('controller', 'textsecure', 'background:textsecure');
    container.injection('route', 'textsecure', 'background:textsecure');
  }
};
