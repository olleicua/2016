(function() {

  var PIXEL_HEIGHT = 9;
  var START_POSITION = [29, 36];

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
    '#               5  -     4               #####',
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
            space.className = 'space';
            space.style.height = (this.pixelSize) + 'px';
            space.style.width = (this.pixelSize) + 'px';
            space.style.top = (this.pixelSize * y) + 'px';
            space.style.left = (this.pixelSize * x) + 'px';
            this.map.append(space);
          }

          var entity = Entities[this.position([y, x])];
          if (entity) {
            //
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

        this.map.style.top = ((window.innerHeight / 2) -
                              (this.pixelSize * vector[0])) + 'px';
        this.map.style.left = ((window.innerWidth / 2) -
                               (this.pixelSize * vector[1])) + 'px';

        // check for entity
        var entity = Entities[symbol];
        if (entity) { entity.interact(); }

        // update volumes
        //
      }
    }
  };

})();
