Polymer('fb-image', {
  publish: {
    image: null
  },
  ready: function() {
    this.width = 0;
    this.height = 0;
    this.x = 10;
    this.y = 10;
    this.sx = 0;
    this.sy = 0;
    this.swidth = 0;
    this.sheight = 0;

    this.super();
  },
  imageChanged: function () {
    this.width = this.image.width;
    this.height = this.image.height;
  },
  draw: function() {
    this.super();
    this.context.drawImage(
        this.image, 0, 0, this.width, this.height);
  }
});
