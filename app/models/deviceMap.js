import DS from 'ember-data';

export default DS.Model.extend({
  identityKey: DS.attr(),
  devices: DS.hasMany('device')
});
