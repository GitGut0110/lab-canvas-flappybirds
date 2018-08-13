function Obstacle(x, y, width, height, direction, ctx) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 2;
  this.img = new Image();
  this.img.src = "images/obstacle_" + direction + ".png";
  this.update = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
  this.move = function() {
    this.x -= this.speedX;
    this.right = this.x + this.width;
    this.left = this.x;
    this.bottom = this.y + this.height;
    this.top = this.y;
  };
  this.crashWith = function(bird) {
    return !(
      bird.bottom < this.top ||
      bird.top > this.bottom ||
      bird.right < this.left ||
      bird.left > this.right
    );
  };
}