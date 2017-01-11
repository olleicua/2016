(function() {

  window.appendFadeIn = function(parent, child) {
    child.style.opacity = 0;
    parent.append(child);
    child.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    child.style.opacity = 1;
  };

  window.fadeIn = function(element) {
    element.style.opacity = 0;
    element.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    element.style.opacity = 1;
  };

  window.fadeOut = function(element) {
    element.style.opacity = 1;
    element.animate([{ opacity: 1 }, { opacity: 0 }], 1000);
    element.style.opacity = 0;
  };

})();
