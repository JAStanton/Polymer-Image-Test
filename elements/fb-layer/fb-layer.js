Polymer('fb-layer', {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  sx: 0,
  sy: 0,
  swidth: 0,
  sheight: 0,
  canvas: {
    width: 0,
    height: 0
  },
  rotationalDegree: 0,
  anchor: {
    x: 0,
    y: 0
  },
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
      if (layer.canvas) {
        try {
          this.context.drawImage(layer.canvas, layer.x, layer.y);
        } catch (e) {
          console.warn("layer: [", layer.id, "] failed to render", e);
        }
      } else {
        console.warn(
            "layer: [", layer.id, "] has no canvas. Most likely super was " +
            "never called on ready");
      }
    }.bind(this));
  },
  animate: function() {
    requestAnimationFrame(this.animate.bind(this));
    this.draw();
  },
  setAnchor: function(x, y) {
    this.anchor.x = x;
    this.anchor.y = y;
  },
});
