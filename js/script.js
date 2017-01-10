// load assets and setup the ui
(function() {
  Message.initialize(function() {
    Message.set('creating mood');
    Message.display();
    Audio.initialize(function() {
      Message.set('setting scene');
      Map.initialize(function() {
        Message.set('enterring space');
        UI.initialize(function() {
          Message.clear();
        });
      });
    });
  });

})();