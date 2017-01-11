(function() {

  window.Entities = [
    {
      label: 'rhythm',
      constructor: { name: 'Rhythm' },
      interact: function() {
        Message.multiPartMessage([
          'The world has a rhythm to it.',
          'Power changes hands at regular intervals.',
          'Monotonously.',
          'Just as a drum beat has no melodic context before we add another instrument;',
          'a leader has not moral status as good or bad for the progress of humanity until we add a political context.'
        ], function() {
          this.activated = true;
          this.element.className = 'entity activated';
        });
      }
    }, {
      label: 'basicgroove',
      constructor: { name: 'BasicGroove' },
      interact: function() {
        Message.multiPartMessage([
          'In the United States a President serves as the locus of executive power for a term of four, or eight, years.',
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
          '... on some level we knew where we were in the cycle..'
        ], function() {
          this.activated = true;
          this.element.className = 'entity activated';
        });
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
          this.element.className = 'entity activated';
        });
      }
    }, {
      label: 'dance',
      constructor: { name: 'Dance' }
    }, {
      label: 'hopesanddreams',
      constructor: { name: 'HopesAndDreams' },
      interact: function() {
        Message.multiPartMessage([
          'We aspire to greatness but ultimately our dreams remain beyond our grasp..',
          'out of sight..',
          'affordable if we save up a little more money..',
          'realisable if we find a few more like-minded people to collaborate with..',
          'possible if we make just a few advances in material science.'
        ], function() {
          this.activated = true;
          this.element.className = 'entity activated';
        });
      }
    }, {
      label: 'breakroads',
      constructor: { name: 'BreakRoads' }
    }, {
      label: 'breakatmosphere',
      constructor: { name: 'BreakAtmosphere' }
    }, {
      label: 'breakbeat',
      constructor: { name: 'BreakBeat' }
    }, {
      label: 'button',
      constructor: { name: 'Button' }
    }
  ];

})();
