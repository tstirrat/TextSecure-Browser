import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('thread', 'Thread', {
  // Specify the other units that are required for this test.
  needs: ['model:contact', 'model:message', 'model:group']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
