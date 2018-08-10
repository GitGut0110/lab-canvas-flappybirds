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
    // img = new Image();
    //console.log("draw flappy");
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    //ctx.rect(300, 200, 200, 200);
    //ctx.fill();
  };
}

Player.prototype.newPos = function() {
  console.log("newPos");
};
