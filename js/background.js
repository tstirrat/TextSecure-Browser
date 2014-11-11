/* vim: ts=4:sw=4:expandtab
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

;(function() {
    'use strict';

    function init() {
        if (!localStorage.getItem('first_install_ran')) {
            localStorage.setItem('first_install_ran', 1);
            extension.navigator.tabs.create("options.html");
        } else {
            if (isRegistrationDone()) {
                textsecure.subscribeToPush(function(message) {
                    Whisper.Messages.addIncomingMessage(message).then(function() {
                        console.log("Got message from " + message.pushMessage.source + "." + message.pushMessage.sourceDevice +
                                    ': "' + getString(message.message.body) + '"');
                        var newUnreadCount = textsecure.storage.getUnencrypted("unreadCount", 0) + 1;
                        textsecure.storage.putUnencrypted("unreadCount", newUnreadCount);
                        extension.navigator.setBadgeText(newUnreadCount);
                    });
                });
            }
        }
    };

    addRegistrationListener(init);
    init();

    var mainPanelId = null;

    window.chrome.windows.onRemoved.addListener(function (win) {
        if (mainPanelId = win.id) {
            mainPanelId = null;
        }
    });

    window.chrome.browserAction.onClicked.addListener(function () {
        if (mainPanelId) {
            window.chrome.windows.update(mainPanelId, { focused: true });
        } else {
        window.chrome.windows.create({ type: 'panel', url: 'ecli/dist/index.html#/', width: 280, focused: true }, function (win) {
            mainPanelId = win.id;
        });
        }
    });
})();
