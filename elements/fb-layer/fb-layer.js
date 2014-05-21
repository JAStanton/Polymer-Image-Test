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
  rotate: "0deg",
  anchor: {
    x: '0%',
    y: '0%'
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
  rotateChanged: function() {
    this.style.webkitTransform = "rotate(" + this.rotate + ")";
  },
  xChanged: function() {
    this.style.left = this.x + "px";
    this.updateRelativePosition();
    this.draw();
  },
  yChanged: function() {
    this.style.top = this.y + "px";
    this.updateRelativePosition();
    this.draw();
  },
  widthChanged: function() {
    this.canvas.width = this.width;
    this.center.x = this.canvas.height / 2;
    this.updateRelativePosition();

    this.draw();
  },
  heightChanged: function() {
    this.canvas.height = this.height;
    this.center.y = this.canvas.height / 2;
    this.updateRelativePosition();

    this.draw();
  },
  updateRelativePosition: function() {
    this.position.x = this.x + (this.anchor.x / 100 * this.width);
    this.position.y = this.y + (this.anchor.y / 100 * this.height);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  draw: function() {
    this.clear();
    for (var i = this.children.length - 1; i >= 0; i--) {
      var layer = this.children[i];
      if (typeof layer.draw == "function") {
        layer.draw();
      }
    }
  },
  animate: function() {
    requestAnimationFrame(this.animate.bind(this));
    this.draw();
  },
  setAnchor: function(x, y) {
    this.anchor.x = x * 100;
    this.anchor.y = y * 100;
    this.style.webkitTransformOrigin = this.anchor.x + "% " + this.anchor.y + "%";
  },
});
