(function() {

  var FADE_DISTANCE = 6;

  window.Entities = [
    {
      label: 'rhythm',
      interact: function() {
        Message.multiPartMessage([
          'The world has a rhythm to it.',
          'Power changes hands at regular intervals.',
          'Monotonously.',
          'Just as a drum beat has no melodic context before we add another instrument;',
          'a leader has not moral status as good or bad for the progress of humanity until we add a political context.'
        ], function() {
          this.activated = true;
          fadeToGrey(this.element);
        }, this);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'politic') {
          return Math.max((this.activated ? 0.8 : 0),
                          (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else if (region === 'interstitial' && this.activated) {
          return 0.4;
        } else {
          return 0;
        }
      }
    }, {
      label: 'basicgroove',
      interact: function() {
        Message.multiPartMessage([
          'In the United States a President serves as the locus of executive power for a term of four,<br /> or eight, years.',
          'Originally a president could serve for as many terms as the people continued to elect him.',
          'In 1947 a term limit of two terms, or eight years, was introduced.',
          'In the time since then, power has, for the most part, oscillated on a more-or-less regular schedule',
          'between red and blue...',
          'elephants and donkeys...',
          'small government and big government...',
          'capitalist and socialist',
          'black and white...',
          'truman <span class="blue">8 years</span> ... eisenhower <span class="red">8 years</span>',
          'kennedy / johnson <span class="blue">8 years</span> ... nixon / ford <span class="red">8 years</span>',
          'carter <span class="blue">4 years</span> ... reagan <span class="red">8 years</span>',
          'bush <span class="red">4 years</span> ... clinton <span class="blue">8 years</span>',
          'bush <span class="red">8 years</span> ... obama <span class="blue">8 years</span>',
          '???',
          '... on some level we had to know where we were in the cycle..'
        ], function() {
          this.activated = true;
          fadeToGrey(this.element);
        }, this);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'politic') {
          return Math.max((this.activated ? 0.8 : 0),
                          (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else if (region === 'interstitial' && this.activated) {
          return 0.4;
        } else {
          return 0;
        }
      }
    }, {
      label: 'texture',
      constructor: { name: 'Texture' },
      interact: function() {
        Message.multiPartMessage([
          'Life is good.',
          'People dance.',
          'People cuddle.',
          'Love is eternal.',
          'The internet will allow people connect over great distances.',
          'The internet will unite the world.',
          'By working together we can build a future where pleasure and prosperity are abundant.'
        ], function() {
          this.activated = true;
          fadeToGrey(this.element);
        }, this);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'politic') {
          return Math.max((this.activated ? 0.8 : 0),
                          (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else if (region === 'interstitial' && this.activated) {
          return 0.4;
        } else {
          return 0;
        }
      }
    }, {
      label: 'dance',
      interact: function() {
        Message.message('Dance isn\'t something that can be explained in words. It has to be danced.<br /> -- Paige Arden', 2500);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'boston') {
          return Math.max(0, (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else {
          return 0;
        }
      }
    }, {
      label: 'hopesanddreams',
      interact: function() {
        Message.multiPartMessage([
          'We aspire to greatness but ultimately our dreams remain beyond our grasp..',
          'out of sight..',
          'affordable if we save up a little more money..',
          'realisable if we find a few more like-minded people to collaborate with..',
          'possible if we make just a few advances in material science.'
        ], function() {
          this.activated = true;
          fadeToGrey(this.element);
        }, this);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'politic') {
          return Math.max((this.activated ? 0.8 : 0),
                          (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else if (region === 'interstitial' && this.activated) {
          return 0.4;
        } else {
          return 0;
        }
      }
    }, {
      label: 'breakroads',
      interact: function() {
        Message.message('I crush everything.<br /> -- Jonathan Coulton', 2500);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'maine') {
          return Math.max(0, (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else {
          return 0;
        }
      }
    }, {
      label: 'breakatmosphere',
      interact: function() {
        Message.message('Did the stars come out? did the world spin round?<br />Doesn\'t matter that much when you are ten miles down<br /> -- Jonathan Coulton', 2500);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'maine') {
          return Math.max(0, (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else {
          return 0;
        }
      }
    }, {
      label: 'breakbeat',
      interact: function() {
        Message.message('If your heart beats too fast it will break<br /> .. like anything else', 2500);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'maine') {
          return Math.max(0, (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else {
          return 0;
        }
      }
    }, {
      label: 'everythingihave',
      interact: function() {
        Message.message('We had everything', 2500);
      },
      calculateVolume: function(currentLocation) {
        var region = Map.currentRegion();
        if (region === 'maine') {
          return Math.max(0, (FADE_DISTANCE - euclideanDistance(this.position, currentLocation)) / FADE_DISTANCE);
        } else {
          return 0;
        }
      }
    }, {
      label: 'button',
      interact: function() {
        if (_.all(_.map([0, 1, 2, 4], function(i) {
          return Entities[i].activated;
        }))) {
          UI.buttonPressed = true;
          Audio.playNote();
        } else {
          Message.message('insufficient power');
        }
      }
    }
  ];

})();
