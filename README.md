# GoldenCookieObserver
Simple addon to Cookie Clicker that beeps when new Golden Cookie appears.

The CookieMonster is a bit "too much of everything" for my taste, so I made the Golden Cookie Observer. It makes a sound on spawn of the Golden Cookie. That's all.

Via F12 console:
```javascript
Game.LoadMod('https://kiraacorsac.github.io/GoldenCookieObserver/GoldenCookieObserver.js');
```

Via bookmark:
```javascript
javascript:(function() {Game.LoadMod('https://kiraacorsac.github.io/GoldenCookieObserver/GoldenCookieObserver.js'); }());
```

Via userscript:
```javascript
// ==UserScript==
// @name GoldenCookieObserver
// @namespace GoldenCookieObserver
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://kiraacorsac.github.io/GoldenCookieObserver/GoldenCookieObserver.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";
window.eval(code);
```

