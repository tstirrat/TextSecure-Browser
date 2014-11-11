import DS from 'ember-data';

export default DS.Model.extend({
  encodedNumber: DS.attr(),
  identityKey: DS.attr(),
  registrationId: DS.attr(),

  preKey: DS.attr(),
  preKeyId: DS.attr(),
  signedKey: DS.attr(),
  signedKeyId: DS.attr(),

  sessions: DS.attr()
});

/*
{
  "encodedNumber": "+11234567890.1",
  "identityKey": "xxxx",
  "registrationId": 6486,
  "sessions": {
      "xxxx": {
          "currentRatchet": {
              "rootKey": "xxxx",
              "lastRemoteEphemeralKey": "xxxx",
              "previousCounter": 0,
              "ephemeralKeyPair": {
                  "pubKey": "xxxx",
                  "privKey": "xxxx"
              }
          },
          "indexInfo": {
              "remoteIdentityKey": "xxxx",
              "closed": -1,
              "baseKey": "xxx"
          },
          "oldRatchetList": [],
          "xxx": {
              "messageKeys": {},
              "chainKey": {
                  "counter": 5,
                  "key": "xxx"
              }
          },
          "pendingPreKey": {
              "preKeyId": 0,
              "signedKeyId": 0,
              "baseKey": "xxx"
          }
      }
  }
}
*/
