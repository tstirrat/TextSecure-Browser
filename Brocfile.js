/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: { enabled: false },
  es3safe: false
});


// app.import('vendor/js/components.js');

// app.import('components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js');

// app.import('vendor/js/protobufs.js');
// app.import('vendor/js/curve25519_compiled.js');
// app.import('vendor/js/nativeclient.js');
// app.import('vendor/js/helpers.js');
// app.import('vendor/js/storage.js');
// app.import('vendor/js/storage/devices.js');
// app.import('vendor/js/storage/groups.js');
app.import('vendor/js/libphonenumber-util.js');

// app.import('vendor/js/webcrypto.js');
// app.import('vendor/js/crypto.js');
// app.import('vendor/js/protocol.js');

// app.import('vendor/js/models/messages.js');
// app.import('vendor/js/models/threads.js');
// app.import('vendor/js/api.js');
// app.import('vendor/js/sendmessage.js');

// app.import('vendor/js/chromium.js');

app.import('components/bootstrap/dist/css/bootstrap.css');
app.import('components/bootstrap/dist/css/bootstrap.css.map', { destDir: '/assets' });
app.import('components/bootstrap/dist/js/bootstrap.js');

app.import('components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', { destDir: '/fonts' });
app.import('components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', { destDir: '/fonts' });
app.import('components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: '/fonts' });
app.import('components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });

module.exports = app.toTree();
