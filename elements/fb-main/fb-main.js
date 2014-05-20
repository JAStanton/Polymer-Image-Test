Polymer('fb-main', {
  imageLoaded_: function(e) {
    var imageLayer = new FbImage();
    imageLayer.image = e.detail.image;
    this.layerManager.add(imageLayer);
  },
  draw: function() {
    this.super();
    this.context.fillStyle = "rgba(0, 0, 0, 0.2)";
    this.context.fillRect(0, 0, this.width, this.height);
  },
  ready: function() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.imageManager_ = document.getElementById("fb-image-manager");
    this.imageManager_.preload("bullet", "/static/images/bullet.png");
    this.imageManager_.addEventListener("imageLoaded", this.imageLoaded_.bind(this));
    this.super();
  },
});
