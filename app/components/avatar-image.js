import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['avatar-image'],
  classNameBindings: [ 'sizeClass' ],

  // bindings
  contact: null,
  size: "xs",

  // private
  imageSizes: {
    xs: 32,
    lg: 48
  },

  imageSrc: function () {
    var width = this.imageSizes[this.get('size')] || 32;
    return 'assets/avatar-temp-%@.jpg'.fmt('' + width);
  }.property('size'),

  sizeClass: function () {
    return 'size-' + this.get('size');
  }.property('size')
});
