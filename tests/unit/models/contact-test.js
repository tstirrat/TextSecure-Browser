import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('contact', 'Contact', {
  // Specify the other units that are required for this test.
  needs: ['model:group']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
