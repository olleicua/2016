(function() {
  // list of loops
  var tracks = ('basicgroove breakbeat dance hopesanddreams texture ' +
                'breakatmosphere breakroads everythingihave rhythm').split(' ');
  var notes = ('G B C D E Gb G2 A2 B2 C2 D2').split(' ');
  var melody = ('D B G* B* D* G2* B2 A2 G2* B* C* D* D D B2* A2 G2* Gb* E Gb G2* G2* D* B* G* B2 B2 B2* C2* D2* D2* C2 B2 A2* B2* C2* C2* C2 B2* A2 G2 Gb* E Gb G2* B* C* D* D* G2* G2 G2 Gb E* E E A2* C2 B2 A2 G2 G2* A2 G2 Gb* D D G2* A2 B2 C2 D2* G2 A2 B2* C2 A2* G2* G2*').split(' ');

  function Note(label) {
    var that = this;

    // init
    this.buffer = null;
    this.source = null;
    var request = new XMLHttpRequest();

    // load file
    request.open('GET', 'audio/' + label + '.wav', true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      Audio.context.decodeAudioData(request.response, function(buffer) {
        that.buffer = buffer;
      });
    };
    request.send();

    // expose controls
    this.start = function() {
      this.source = Audio.context.createBufferSource();
      this.source.buffer = that.buffer;
      this.source.connect(Audio.context.destination);
      this.source.start(0);
    };
    this.stop = function() {
      if (this.source) { this.source.stop(); }
    };
  };

  function Loop(label, callback) {
    // init
    var gain = Audio.context.createGain();
    var source = Audio.context.createBufferSource();
    var request = new XMLHttpRequest();
    source.loop = true;
    source.connect(gain);
    gain.gain.value = 0;
    gain.connect(Audio.context.destination);

    // load file
    request.open('GET', 'audio/' + label + '.wav', true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      Audio.context.decodeAudioData(request.response, function(buffer) {
        source.buffer = buffer;
        callback();
      });
    };
    request.send();

    // expose controls
    this.start = function() { source.start(0); };
    this.stop = function() { source.stop(); };
    this.volume = function(value) { gain.gain.value = value; };
  };

  window.Audio = {

    // Setup the looping audio tracks (initially silent)
    initialize: function(callback) {
      var that = this;

      if (!window.AudioContext && !window.webkitAudioContext) {
        Message.set('this web browser will not work for this, try Google Chrome');
      } else {
        // create audio container with webkit fallback
        this.context = new (window.AudioContext || window.webkitAudioContext)();

        var allTracksLoaded = _.after(tracks.length, function() {
          for (var i = 0; i < tracks.length; i++) { that[tracks[i]].start(); }

          setTimeout(callback, 750);
        });

        // load loops
        for (var i = 0; i < tracks.length; i++) {
          var trackName = tracks[i];
          this[trackName] = new Loop(trackName, allTracksLoaded);
        }

        // load notes
        this.notes = {};
        for (var i = 0; i < notes.length; i++) {
          var label = notes[i];
          this.notes[label] = new Note(label);
        }
        this.noteIndex = 0;
      }
    },

    playNote: function() {
      var that = this;

      if (!this.playing) {
        if (melody[this.noteIndex]) {
          var note = melody[this.noteIndex];
          var duration = /\*/.exec(note) ? 2000 : 1000;
          note = note.replace('*', '');
          this.notes[note].start();
          this.noteIndex++;
          this.playing = true;
          setTimeout(function() { that.playing = false; }, duration);
        } else {
          Message.message('what sound does the nuclear apocalypse make?', 3000);
          setTimeout(function() {
            UI.end();
          }, 4000);
        }
      }
    },

    endAll: function() {
      for (var i = 0; i < tracks.length; i++) {
        var trackName = tracks[i];
        this[tracks[i]].stop();
      }

      for (var i = 0; i < notes.length; i++) {
        this.notes[notes[i]].stop();
      }
    }
  };

})();
