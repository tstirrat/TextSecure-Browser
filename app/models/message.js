import DS from 'ember-data';

export default DS.Model.extend({
  thread: DS.belongsTo('thread'),

  type: DS.attr('string', { defaultValue: 'outgoing' }),
  body: DS.attr(),
  attachments: DS.attr(),
  timestamp: DS.attr('timestamp'),

  author: DS.belongsTo('contact')
});

/*
{
    "type": "outgoing",
    "body": "sd",
    "threadId": "+11234567890",
    "attachments": [],
    "timestamp": 1415133168417,
    "id": "0335ea17-149b-0d00-f2bf-f6fe4bec7d4a"
}
*/
