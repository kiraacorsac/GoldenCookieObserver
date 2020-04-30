class GoldenCookieObserver {
  constructor() {
    this.audio = new AudioContext()
  }

  beep(vol, freq, duration) {
    let v = this.audio.createOscillator()
    let u = this.audio.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(a.destination)
    u.gain.value = vol * 0.01
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
  }

  observe() {
    Game.shimmerTypes['golden'].proxiedSpawned = Game.shimmerTypes['golden'].spawned;
    Object.defineProperties(Game.shimmerTypes['golden'], {
      "spawned": {
        get: function () {
          return this.value;
        },
        set: function (val) {
          if (val > 0) {
            beep(999, 220, 300);
          }
          this.value = val;
        }
      },
    });
  }

  forVersion() {
    return "2.022"
  }
}

console.log("Thank you for observing with KiraaCorsac's Golden Cookie Observer. We guarantee you a beep for every golden cookie or your money back.")

let observer = new GoldenCookieObserver;
var proceed = true;
if (Game.version != observer.forVersion()) {
  proceed = confirm(`I made this for verison ${observer.forVersion()}, you are running this on ${Game.version}. Your computer might explode or something (for example, it might just not work).`);
}

if (proceed) {
  observer.observe();
}


