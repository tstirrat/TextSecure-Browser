import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function (timestamp) {
    var type = typeof timestamp;

    if (type === "string") {
      timestamp = parseInt(timestamp, 10);
    } else if (type !== "number") {
      return null;
    }

    return new Date(timestamp);
  },

  serialize: function (date) {
    return (date) ? date.getTime() : null;
  }
});
