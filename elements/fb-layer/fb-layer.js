Polymer('fb-layer', {
  width: 0,
  height: 0,
  canvas: {
    width: 0,
    height: 0
  },
  rotationalDegree: 0,
  ready: function() {
    this.position = new FbMathPoint(),
    this.center = new FbMathPoint(),
    this.layerManager = this.$["fb-layer-manager"];

    this.canvas = this.$.canvas;
    this.context = this.canvas.getContext('2d');
    this.context.webkitImageSmoothingEnabled = true;

    requestAnimationFrame(this.animate.bind(this));
  },
  widthChanged: function() {
    this.canvas.width = this.width;
    this.center.x = this.canvas.height / 2;
    this.draw();
  },
  heightChanged: function() {
    this.canvas.height = this.height;
    this.center.y = this.canvas.height / 2;
    this.draw();
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  draw: function() {
    this.clear();
    this.layerManager.forEach(function(layer) {
      this.context.drawImage(layer.canvas, layer.x, layer.y);
    }.bind(this));
  },
  animate: function() {
    requestAnimationFrame(this.animate.bind(this));
    this.draw();
  },
});
