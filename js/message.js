(function() {

  window.Message = {

    // setup DOM message box
    initialize: function(callback) {
      this.messageBox = document.createElement('div');
      this.messageBox.className = 'message-box';
      document.body.append(this.messageBox);

      callback();
    },

    // modify the content in the message box
    set: function(content) {
      this.messageBox.innerHTML = content;
    },

    // fade in the message box
    display: function() {
      fadeIn(this.messageBox);
      this.isOpen = true;
    },

    // fade out the message box and clear the content
    clear: function() {
      fadeOut(this.messageBox);
      this.isOpen = false;
    },

    message: function(content, interval) {
      Message.set(content);
      Message.display();
      setTimeout(function() { Message.clear(); }, interval);
    },

    multiPartMessage: function(parts, callback, context) {
      this.parts = parts;
      this.callback = function () { callback.call(context); };
      this.index = 0;
      this.set(this.parts[0]);
      this.display();
    },

    // step through a multi-part message
    step: function() {
      if (this.parts) {
        this.index++;

        if (this.parts[this.index]) {
          this.set(this.parts[this.index]);
        } else {
          this.clear();
          this.parts = null;
          this.context = null;
          this.index = null;
          this.callback();
        }
      }
    }
  };

})();
