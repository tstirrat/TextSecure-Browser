import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  keyForRelationship: function (key, kind) {
    if (kind === "belongsTo") {
      return key + "Id";
    }
    return key;
  }

});
