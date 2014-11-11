import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({

  defaultOrderBy: 'timestamp',

  keyPrefix: null, // prepend storage key with a record property

  encrypted: false, // TODO: encrypt into localStorage override in per-type adapter

  keyForType: function (type) {
    return type.typeKey.classify().pluralize();
  },

  keyForRecord: function (type, record) {
    var key = this.keyForType(type) + '-';

    if (this.keyPrefix) {
      key += record.get(this.keyPrefix) + '-';
    }

    key += record.id;

    return key;
  },

  find: function(store, type, id) {
    var key = [this.keyForType(type), id].join('-');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      setTimeout(function () {
        var record = window.localStorage.getItem(key);

        if (!record) {
          Ember.run(null, reject, new Error('Cannot find `%@` with id `%@`'.fmt(type.typeKey, id)));
        }

        Ember.run(null, resolve, JSON.parse(record));
      }, 1);
    });
  },

  findAllWithPrefix: function (type, additionalPrefix, orderBy) {
    var keyPrefix = this.keyForType(type) + '-',
        self = this;

    if (additionalPrefix) {
      keyPrefix += additionalPrefix + '-';
    }

    var keys = Object.keys(window.localStorage).filter(function (key) {
      return key.indexOf(keyPrefix) === 0;
    });

    return new Ember.RSVP.Promise(function(resolve) {
      setTimeout(function () {
        var records = [];
        keys.forEach(function (key) {
          var json = window.localStorage.getItem(key);

          // TODO: ignore non json values for now
          if (json.indexOf('{') === 0) {
            records.push(JSON.parse(json));
          }
        });

        var sortField = orderBy || self.defaultOrderBy;
        records.sort(function (a, b) {
          return a[sortField] > b[sortField];
        });

        Ember.run(null, resolve, records);
      }, 1);
    });
  },

  findAll: function(store, type) {
    return this.findAllWithPrefix(type);
  },

  findQuery: function (store, type, query) {
    var additionalPrefix = query.thread;

    return this.findAllWithPrefix(type, additionalPrefix, query.orderBy).then(function (records) {
      // allow any records
      return records.filter(function (record) {

        // where all properties match
        return Object.keys(query).every(function (prop) {
          return record[prop] === query[prop];
        });

      });
    });
  },

  createRecord: function (store, type, record) {
    var data = this.serialize(record, { includeId: true });
    var key = this.keyForRecord(type, record);

    return new Ember.RSVP.Promise(function(resolve) {
      setTimeout(function() {
        window.localStorage.setItem(key, JSON.stringify(data));
        Ember.run(null, resolve, data);
      }, 1);
    });
  },

  updateRecord: function(store, type, record) {
    return this.createRecord(store, type, record);
  },

  deleteRecord: function (store, type, record) {
    var key = this.keyForRecord(type, record);

    return new Ember.RSVP.Promise(function(resolve) {
      setTimeout(function() {
        window.localStorage.removeItem(key);
        Ember.run(null, resolve, record);
        // TODO: error state
      }, 1);
    });
  }

});
