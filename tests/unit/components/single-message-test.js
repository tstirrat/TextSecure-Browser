import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('single-message', 'SingleMessageComponent', {
  // specify the other units that are required for this test
  needs: ['component:avatar-image']
});

test('it renders', function() {
  expect(2);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('#isOutgoing', function() {
  expect(2);
  var component = this.subject();
  equal(component.get('isOutgoing'), false);

  Ember.run(component, 'set', 'type', 'outgoing');
  equal(component.get('isOutgoing'), true);
});

test('it has class .single-message', function() {
  expect(1);
  var component = this.subject();
  this.append();

  ok(find('.single-message'));
});

test('it has .outgoing when type == outgoing', function() {
  expect(1);
  var component = this.subject();
  Ember.run(component, 'set', 'type', 'outgoing');
  this.append();

  ok(find('.outgoing'));
});
