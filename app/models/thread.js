import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr('string', { defaultValue: 'private' }),
  active: DS.attr('boolean', { defaultValue: true }),
  image: DS.attr('string', { defaultValue: '/assets/images/default.png'}),
  unreadCount: DS.attr('number', { defaultValue: 0 }),
  timestamp: DS.attr('timestamp'),
  contacts: DS.hasMany('contact'),
  messages: DS.hasMany('message', { async: true })
});

/*
{
    "id": "+11234567890",
    "name": "+11234567890",
    "type": "private",
    "image": "/images/default.png",
    "unreadCount": 0,
    "timestamp": 1415307430894,
    "active": true
}
*/
