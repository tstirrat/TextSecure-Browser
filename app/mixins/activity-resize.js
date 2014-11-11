import Ember from 'ember';

export default Ember.Mixin.create({
  attachResizeEvent: function () {
    window.addEventListener('resize', this.resizeActivityContent, true); // FIXME: needs debounce
  }.on('didInsertElement'),

  removeResizeEvent: function () {
    window.removeEventListener('resize', this.resizeActivityContent);
  }.on('willDestroyElement'),

  resizeActivityContent: function () {
    var headerHeight = this.$('.activity-header').height() || 0;
    var footerHeight = this.$('.activity-footer').height() || 0;
    var fullHeight = this.$(document).height();
    this.$('.activity-content').css('height', fullHeight - headerHeight - footerHeight);
  }.on('didInsertElement')
});
