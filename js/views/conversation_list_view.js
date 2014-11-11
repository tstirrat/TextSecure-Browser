var Whisper = Whisper || {};

(function () {
  'use strict';

  Whisper.ConversationListView = Whisper.ListView.extend({
    tagName: 'div',
    id: 'contacts',
    itemView: Whisper.ConversationListItemView,
    collection: Whisper.Threads
  });
})();
