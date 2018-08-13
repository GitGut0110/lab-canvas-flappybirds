function Player(x, y, w, h, speedX, speedY, g, gSpeed) {
  this.w = w;
  this.h = h;
  this.speedX = speedX;
  this.speedY = speedY;
  this.g = g;
  this.gSpeed = gSpeed;
  this.x = x;
  this.y = y;
  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.update = function() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    //ctx.rect(300, 200, 200, 200);
    //ctx.fill();
  };
  this.newPos = function() {
    this.y += this.speedY;
  };
  this.moveUp = function() {
    if (this.y <= 10) {
      this.speedY = 0;
    } else {
      this.speedY -= 8;
    }
  };
  this.stop = function() {
    if (this.y > 600) {
      console.log('Game over')
         clearInterval(interval);
         isGameStarted = false;
  }}

  // END OF CONSTRUCTOR do not touch!!
}
