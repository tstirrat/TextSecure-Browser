/* vim: ts=4:sw=4:expandtab:
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Whisper.Layout = new (Backbone.View.extend({
    initialize: function() {
        var query = document.location.query;

        window.addEventListener('storage', function() {
            Whisper.Threads.fetch();
        });
        Whisper.Threads.fetch({reset: true}).then(function () {
            new Whisper.ConversationView({el: $('#disc'), model: Whisper.Threads.models[0]});
        });
    },
    setContent: function(content) {
        $(content).insert(this.gutter);
        this.resize();
    }
}))({el: document});
