Polymer('fb-image', {
  observe: {
    'id': 'idChanged'
  },
  publish: {
    image: new Image(),
  },
  repetition: 'no-repeat',
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
    this.width = this.width || this.image.width;
    this.height = this.height || this.image.height;
  },
  draw: function() {
    this.super();
    if (this.image) {
      var pattern = this.context.createPattern(this.image, this.repetition);
      this.context.fillStyle = pattern;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }
});
