(function() {

  var PIXEL_HEIGHT = 9;
  var START_POSITION = [29, 37];

  var grid = [
    '##############################################',
    '#######################   ####################',
    '######################  9  ###################',
    '######################     ###################',
    '#####################     ####################',
    '######################     ##############   ##',
    '#######################     ############  3  #',
    '######################     ############     ##',
    '#####################     ############     ###',
    '#####   ##############     ##########     ####',
    '####  8  ##############     ########     #####',
    '###       ############     #########-----#####',
    '##                 -                     #####',
    '##                 -                     #####',
    '#         5        -     4               #####',
    '# 7                -                     #####',
    '#                  -                     #####',
    '##     6        ####################  2  #####',
    '######   ###########################     #####',
    '#####################################     ####',
    '#####################################     ####',
    '#####################################  1  ####',
    '#####################################     ####',
    '####################################     #####',
    '####################################     #####',
    '####################################  0  #####',
    '####################################     #####',
    '###################################     ######',
    '###################################     ######',
    '###################################  S  ######',
    '####################################   #######',
    '##############################################'
  ];

  window.Map = {

    // Setup the map of the world
    initialize: function(callback) {
      this.pixelSize = window.innerHeight / PIXEL_HEIGHT;
      this.map = document.createElement('div');
      this.map.className = 'map';
      this.map.style.height = (grid.length * this.pixelSize) + 'px';
      this.map.style.width = (grid[0].length * this.pixelSize) + 'px';
      document.body.append(this.map);
      this.setLocation(START_POSITION);

      for (var y = 0; y < grid.length; y++) {
        for (var x = 0; x < grid[y].length; x++) {
          var symbol = this.position([y, x]);

          if (symbol !== '#') {
            var space = document.createElement('div');
            if (symbol === '-') {
              space.className = 'space region-boundary';
            } else {
              space.className = 'space';
            }
            space.style.height = (this.pixelSize) + 'px';
            space.style.width = (this.pixelSize) + 'px';
            space.style.top = (this.pixelSize * y) + 'px';
            space.style.left = (this.pixelSize * x) + 'px';
            appendFadeIn(this.map, space);

            if (symbol === 'S') {
              this.startSpace = space;
            }
          }

          var entity = Entities[this.position([y, x])];
          if (entity) {
            entity.position = [y, x];

            var entityElement = document.createElement('div');
            if (entity.label === 'button') {
              entityElement.className = 'entity button';
            } else {
              entityElement.className = 'entity';
            }
            entityElement.style.height = (1.3 * this.pixelSize) + 'px';
            entityElement.style.width = (1.3 * this.pixelSize) + 'px';
            entityElement.style.top = (this.pixelSize * (y - 0.17)) + 'px';
            entityElement.style.left = (this.pixelSize * (x - 0.17)) + 'px';
            entity.element = entityElement
            appendFadeIn(this.map, entityElement);
          }
        }
      }

      setTimeout(callback, 750);
    },

    move: function(vector) {
      this.setLocation([vector[0] + this.currentLocation[0],
                        vector[1] + this.currentLocation[1]]);
    },

    position: function(vector) {
      return (grid[vector[0]] || {})[vector[1]];
    },

    setLocation: function(vector) {
      var symbol = this.position(vector);

      if (symbol !== '#' && symbol != null) {
        this.currentLocation = vector;

        var newTop = ((window.innerHeight / 2) -
                      (this.pixelSize * vector[0])) + 'px';
        var newLeft = ((window.innerWidth / 2) -
                       (this.pixelSize * vector[1])) + 'px';

        if (this.map.style.top && this.map.style.left) {
          this.map.animate([
            {top: this.map.style.top, left: this.map.style.left},
            {top: newTop, left: newLeft}
          ], 500);
        }

        this.map.style.top = newTop;
        this.map.style.left = newLeft;

        // check for entity
        var entity = Entities[symbol];
        if (entity) { (entity.interact || function() {})(); }

        // update volumes
        //
      }
    }
  };

})();
