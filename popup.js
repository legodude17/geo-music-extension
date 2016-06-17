/*jslint browser:true*/
/*global console, chrome*/
var lvls = ['Stereo Madness', 'Back On Track', 'Polargeist', 'Base After Base', "Can't Let Go", "Jumper", "Time Machine", 'Cycles', 'xStep', 'Clutterfunk', 'Theory of Everything', 'Electroman Adventures', 'Clubstep', 'Electrodynamix', 'Hexagon Force', 'Blast Processing', 'Theory of Everything 2', 'Geometrical Dominator', 'Deadlocked'], tracks = [], current;
function d(id) {'use strict'; console.log('id:', id); return document.getElementById(id); }
function help(track, num) {
    'use strict';
    return function () {
        try {
            track.play();
            current = num;
        } catch (e) {
            console.log(e);
        }
    };
}
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var i;
    for (i = 0; i < lvls.length; i += 1) {
        try {
            tracks[i] = d(lvls[i] + ' Audio');
            d(lvls[i]).onclick = help(tracks[i], i);
        } catch (e) {
            console.log(e);
            console.error('No audio for ', lvls[i]);
        }
    }
});
chrome.extension.onMessage.addListener(function (message) {
    'use strict';
    console.log(message);
});