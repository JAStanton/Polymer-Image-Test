Polymer('fb-main', {
  ready: function() {
    // Root canvas needs to be full width
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // setup mouse events
    this.mouse_ = document.getElementById('fb-mouse');
    this.mouse_.subscribe(this.mouseUpdate_.bind(this));

    // Load some images
    this.imageManager_ = document.getElementById('fb-image-manager');
    this.imageManager_.preload('bullet', '/static/images/bullet.png');
    this.imageManager_.preload('ground', '/static/images/ground.png');

    // Setup canvas, layerManager, render loop.
    this.super();

    // Add the stage layer.
    this.stage = new FbStage();
    this.stage.backgroundColor = 'rgba(51, 113, 195, 0.8)';
    this.stage.width = this.width;
    this.stage.height = this.height;
    this.appendChild(this.stage);

    // // Add out trajectory layer
    this.trajectory = new FbTrajectory();
    this.trajectory.width = this.width;
    this.trajectory.height = this.height;
    this.appendChild(this.trajectory);

    // Add our gun layer.
    this.gun = new FbImage();
    this.gun.x = 50;
    this.gun.y = this.height - 100;
    this.gun.id = 'bullet';
    this.gun.setAnchor(0.5, 0.5);
    this.appendChild(this.gun);


    // Add our ground layer.
    this.ground = new FbImage();
    this.ground.x = 0;
    this.ground.y = this.height - 32;
    this.ground.repetition = 'repeat-x';
    this.ground.width = this.width; // this will need to be responsive.
    this.ground.id = 'ground';
    this.appendChild(this.ground);

  },
  mouseUpdate_: function() {
    var angle = this.gun.position.getAngleTo(this.mouse_.position);
    this.gun.rotate = (angle * (180 / Math.PI) - 180) + "deg";
    this.trajectory.gunAngle = angle * -1 - Math.PI;
  }
});
