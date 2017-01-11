(function() {

  window.UI = {

    // Setup user interface
    initialize: function(callback) {

      // create avatar
      this.avatar = document.createElement('div');
      this.avatar.className = 'avatar';
      this.avatar.style.height = (Map.pixelSize / 2) + 'px';
      this.avatar.style.width = (Map.pixelSize / 2) + 'px';
      var startSpacePosition = Map.startSpace.getBoundingClientRect();
      this.avatar.style.top = (startSpacePosition.top + (Map.pixelSize / 4)) + 'px';
      this.avatar.style.left = (startSpacePosition.left + (Map.pixelSize / 4)) + 'px';
      appendFadeIn(document.body, this.avatar);

      // listen for keystrokes
      window.addEventListener('keyup', function(event) {
        if (Message.isOpen) {
          Message.step();
        } else {
          if (event.key === 'w') {
            Map.move([-1, 0]);
          } else if (event.key === 'a') {
            Map.move([0, -1]);
          } else if (event.key === 's') {
            Map.move([1, 0]);
          } else if (event.key === 'd') {
            Map.move([0, 1]);
          }
        }
      });

      setTimeout(callback, 750);
    },
  };

})();
