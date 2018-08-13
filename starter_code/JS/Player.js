function Bird(x, y, width, height, ctx) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedY = 0;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.update = function() {
    ctx.save(); // save current state
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    if (this.speedY < -1) ctx.rotate(-Math.PI / 4);
    else if (this.speedY > 1) ctx.rotate(Math.PI / 4);
    ctx.drawImage(
      this.img,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    ctx.restore(); // restore original states (no rotation etc)
  };
  this.newPos = function() {
    this.y += this.speedY;
    this.right = this.x + this.width;
    this.left = this.x;
    this.bottom = this.y + this.height;
    this.top = this.y;
  };
  this.moveUp = function() {
    this.speedY -= 8;
  };
}