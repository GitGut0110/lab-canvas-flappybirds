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
  this.moveUp = function() {
    console.log('flapin')
    if(this.y+this.h/2 <= 0){
      this.Speedy = 0
    }else{
    this.speedY -= 2*g;
  };}
  this.dead = function() {
    if (this.y > 600) {
      return true;
    }
  };
}

Player.prototype.newPos = function() {
  // console.log("newPos");
  this.y += this.speedY;
  this.speedY += this.g;
};
