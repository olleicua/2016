(function() {

  window.Message = {

    // Setup DOM message box
    initialize: function(callback) {
      this.messageBox = document.createElement('div');
      this.messageBox.className = 'message-box';
      document.body.append(this.messageBox);

      callback();
    },

    // Modify the content in the message box
    set: function(content) {
      this.messageBox.innerHTML = content;
    },

    // fade in the message box
    display: function() {
      this.messageBox.style.display = 'block';
    },

    // fade out the message box and clear the content
    clear: function() {
      this.messageBox.innerHTML = '';
      this.messageBox.style.display = 'none';
    }
  };

})();
