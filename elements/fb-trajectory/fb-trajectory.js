Polymer('fb-trajectory', {
  marchSpeed: 70,  // Smaller is faster
  timeOffset: 0,
  ready: function() {
    this.constants_ = document.getElementById('fb-constants');
    this.super();
    this.context.fillStyle = 'white';
    this.context.strokeStyle = 'white';
    this.gunAngle = 0;
  },
  draw: function() {
    this.super();
    this.timeOffset += 1;
    this.timeOffset %= this.marchSpeed;

    var theta = this.gunAngle;
    var x = 0, y = 0;
    for(var t = 0 + this.timeOffset / (1000 * this.marchSpeed / 60); t < 3; t += 0.03) {
        x = this.constants_.bulletSpeed * t * Math.cos(theta);
        y = this.constants_.bulletSpeed * t * Math.sin(theta) - 0.5 * this.constants_.gravity * t * t;
        this.context.fillRect(x + 65, 410 - y, 3, 3);
        if (y < -30) break;
    }
  }
});
