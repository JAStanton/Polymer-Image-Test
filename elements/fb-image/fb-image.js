Polymer('fb-image', {
  publish: {
    image: new Image()
  },
  ready: function() {
    this.imageManager_ = document.getElementById('fb-image-manager');
    this.super();
  },
  imageLoaded_: function(e) {
    this.image = e.detail.image;
    this.setDimensions_();
  },
  idChanged: function () {
    this.image = this.imageManager_.getImage(this.id);
    if (this.image) {
      this.setDimensions_();
    } else {
      this.imageManager_.addEventListener(
          this.id + 'Loaded', this.imageLoaded_.bind(this), false);
    }
  },
  setDimensions_: function() {
    this.width = this.image.width;
    this.height = this.image.height;
  },
  draw: function() {
    this.super();
    if (this.image) {
      this.context.drawImage(this.image, 0, 0, this.width, this.height);
    }
  }
});
