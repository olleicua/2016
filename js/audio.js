(function() {
  // create audio container with webkit fallback
  var context = new (window.AudioContext || window.webkitAudioContext)();

  // list of loops
  var tracks = ('basicgroove breakbeat dance hopesanddreams texture ' +
                'breakatmosphere breakroads everythingihave rhythm').split(' ');

  function Loop(label, callback) {

    // init
    var gain = context.createGain();
    var source = context.createBufferSource();
    var request = new XMLHttpRequest();
    source.loop = true;
    source.connect(gain);
    gain.gain.value = 0;
    gain.connect(context.destination);

    // load file
    request.open('GET', 'audio/' + label + '.wav', true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        source.buffer = buffer;
        callback();
      });
    };
    request.send();

    // expose controls
    this.start = function() { source.start(0); };
    this.volume = function(value) { gain.gain.value = value; };
  };

  window.Audio = {

    // Setup the looping audio tracks (initially silent)
    initialize: function(callback) {
      var that = this;

      var allTracksLoaded = _.after(tracks.length, function() {
        for (var i = 0; i < tracks.length; i++) { that[tracks[i]].start(); }

        setTimeout(callback, 750);
      });

      for (var i = 0; i < tracks.length; i++) {
        var trackName = tracks[i];
        this[trackName] = new Loop(trackName, allTracksLoaded);
      }
    }
  };

})();
