import DS from 'ember-data';

export default DS.Model.extend({
  contacts: DS.hasMany('contact')
});
