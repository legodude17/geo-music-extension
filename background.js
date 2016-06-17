/*global chrome, console*/
var lvls = ['Stereo Madness', 'Back On Track', 'Polargeist', 'Base After Base', "Can't Let Go", "Jumper", "Time Machine", 'Cycles', 'xStep', 'Clutterfunk', 'Theory of Everything', 'Electroman Adventures', 'Clubstep', 'Electrodynamix', 'Hexagon Force', 'Blast Processing', 'Theory of Everything 2', 'Geometrical Dominator', 'Deadlocked'];
chrome.omnibox.setDefaultSuggestion({description: 'Stereo Madness'});
chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
    'use strict';
    console.log(text);
    var suggestions = [], i;
    for (i = 0; i < lvls.length; i += 1) {
        if (lvls[i].toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) === 0) {
            suggestions.push({
                content: text,
                description: lvls[i]
            });
        }
    }
    console.log(suggestions);
    suggest(suggestions);
});
chrome.omnibox.onInputEntered.addListener(function (text) {
    'use strict';
    if (!lvls.includes(text)) {
        return;
    }
    chrome.extension.sendMessage(text);
});