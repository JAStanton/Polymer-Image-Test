Polymer('fb-main', {
  ready: function() {
    // Root canvas needs to be full width
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Load some images
    this.imageManager_ = document.getElementById('fb-image-manager');
    this.imageManager_.preload('bullet', '/static/images/bullet.png');
    this.imageManager_.preload('ground', '/static/images/ground.png');

    // constants
    this.SHOT_DELAY = 300; // milliseconds (10 bullets/3 seconds)
    this.BULLET_SPEED = 800; // pixels/second
    this.NUMBER_OF_BULLETS = 20;
    this.GRAVITY = 980; // pixels/second/second

    // Setup canvas, layerManager, render loop.
    this.super();

    // Add the stage layer.
    this.stage = new FbStage();
    this.stage.backgroundColor = 'rgba(51, 113, 195, 0.8)';
    this.stage.width = this.width;
    this.stage.height = this.height;
    this.layerManager.add(this.stage);

    // Add our gun layer.
    this.gun = new FbImage();
    this.gun.x = 50;
    this.gun.y = this.height - 64;
    this.gun.id = 'bullet'
    this.gun.setAnchor(0.5, 0.5);
    this.layerManager.add(this.gun);
  },
});
