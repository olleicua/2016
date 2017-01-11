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

  window.fadeToGrey = function(element) {
    element.style.backgroundColor = '#fff';
    element.animate([{ backgroundColor: '#fff' },
                     { backgroundColor: '#aaa' }], 1000);
    element.style.backgroundColor = '#aaa';
  };

  window.euclideanDistance = function(a, b) {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
  };

})();
