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
          setTimeout(function() {
            if (!UI.hasMoved) {
              Message.message('<div class="ui-wasd-image"></div>', 1500);
            }
          }, 2000);
        });
      });
    });
  });

})();
