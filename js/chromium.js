/* vim: ts=4:sw=4
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

window.extension = window.extension || {};

window.extension.navigator = function() {
    var self = {};
    
    var tabs = {};
    tabs.create = function(url){
        chrome.tabs.create({url: url});
    };
    self.tabs = tabs;
    
    self.setBadgeText = function(text){
        chrome.browserAction.setBadgeText({text: text + ""});
    };
    
    return self;
}();

// Random shared utilities that are used only by chromium things

function registrationDone() {
	localStorage.setItem("chromiumRegistrationDone", "");
    chrome.runtime.sendMessage('registration_done');
    window.location = '/index.html';
}

function isRegistrationDone() {
	return localStorage.getItem("chromiumRegistrationDone") !== null;
}

function addRegistrationListener(callback) {
    chrome.runtime.onMessage.addListener(function(message) {
        if (message === 'registration_done') {
            callback();
        }
    });
};

window.extension.panels = (function () {
    var self = {};

    var panels = {
        main: null
        // thread-+123456789: 1234
        // group-2: 1235
    };

    self.create =  function (windowName, options) {
        var panelId = panels[windowName];

        // if already created, focus the panel
        if (panelId) {
            window.chrome.windows.update(panelId, { focused: true });
            return;
        }

        window.chrome.windows.create(options, function (win) {
            panels[windowName] = win.id;
        });
    };

    window.chrome.windows.onRemoved.addListener(function (windowId) {
        var keys = Object.keys(panels).filter(function (k) {
            return panels[k] === windowId;
        });

        if (keys.length) {
            keys.forEach(function (windowName) {
                panels[windowName] = null;
            });
        }
    });

    return self;
}());