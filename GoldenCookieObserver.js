class GoldenCookieObserver {
  constructor() {
    this.audio = new AudioContext()
    this._volume = 5;

  }
  set volume(val) {
    this._volume = val;
  };

  get volume() {
    return this._volume;
  }

  beep(vol, freq, duration) {
    let v = this.audio.createOscillator()
    let u = this.audio.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(this.audio.destination)
    u.gain.value = parseFloat((vol * 0.01).toFixed(2));
    v.start(this.audio.currentTime)
    v.stop(this.audio.currentTime + duration * 0.001)
  }

  observe() {
    let observer = this;
    Game.shimmerTypes['golden'].proxiedSpawned = Game.shimmerTypes['golden'].spawned;
    Object.defineProperties(Game.shimmerTypes['golden'], {
      "spawned": {
        get: function () {
          return this.value;
        },
        set: function (val) {
          if (val > 0) {
            observer.beep(observer.volume * Game.volume, 220, 150);
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
if(Game == undefined){
  console.log("... but this is not Cookie Clicker, is it");

}
Game.Observer = new GoldenCookieObserver;
var proceed = true;
if (Game.version != Game.Observer.forVersion()) {
  proceed = confirm(`I made this for verison ${Game.Observer.forVersion()}, you are running this on ${Game.version}. Your computer might explode or something (for example, it might just not work).`);
}

if (proceed) {
  Game.Observer.observe();
}


