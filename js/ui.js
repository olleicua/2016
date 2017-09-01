(function() {

  window.UI = {

    // Setup user interface
    initialize: function(callback) {
      var that = this;

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
        } else if (UI.buttonPressed && Map.currentEntity) {
          Map.currentEntity.interact();
        } else {
          if (event.key === 'w') {
            that.hasMoved = true;
            Map.move([-1, 0]);
          } else if (event.key === 'a') {
            that.hasMoved = true;
            Map.move([0, -1]);
          } else if (event.key === 's') {
            that.hasMoved = true;
            Map.move([1, 0]);
          } else if (event.key === 'd') {
            that.hasMoved = true;
            Map.move([0, 1]);
          } else if (event.key === 'e' && Map.currentEntity) {
            that.hasInteracted = true;
            Map.currentEntity.interact();
          }
        }
      });

      setTimeout(callback, 750);
    },

    end: function() {
      Audio.endAll();
      var elements = document.querySelectorAll('*');
      for (var i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
    }
  };

})();
