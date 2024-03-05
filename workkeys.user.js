// ==UserScript==
// @name         Refresh The Damn WorkKeys
// @namespace    http://github.com/demonitize
// @version      1.0.1
// @description  Automagically refreshes the authorization page for WorkKeys
// @author       Dexter
// @match        https://workkeys.actdigitalservices.org/ltiProctoring/Monitor/index
// @icon         https://static.wikia.nocookie.net/among-us-wiki/images/3/31/Red.png/revision/latest/thumbnail/width/360/height/360?cb=20230601155504
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
      document.getElementsByClassName("action-bar clearfix")[0].innerHTML += `<button class="btn-info small tool-dmtz-refresh" title="Auto-Magically refresh the page" onclick="javascript:toggleShit"><span class="icon-reset"></span>Toggle Auto-Refresh</button>`;
    }, 1000);
    let workingMyAssOff = setInterval(function() {
        document.getElementsByClassName("tool-refresh")[0].click();
    }, 10000);


    function toggleShit() {
        if (typeof(workingMyAssOff) == Number) {
            clearInterval(workingMyAssOff);
        } else {
            workingMyAssOff;
        }
    }
})();
