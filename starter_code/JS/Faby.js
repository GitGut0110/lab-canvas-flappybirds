function Player(x,y,w, h, speedX, speedY, g, gSpeed) {
  this.w = w;
  this.h = h;
  this.speedX = speedX;
  this.speedY = speedY;
  this.g = g;
  this.gSpeed = gSpeed;
  this.x = x;
  this.y = y;
  this.update = function(){
    // img = new Image();
    // src = "/starter_code/images/flappy.png";
    console.log ("draw flappy")
    //  ctx.drawImage(this.img, 200, 200, 300,300)
    ctx.rect(300,200,200,200)
    //ctx.fill();
  }
}

Player.prototype.newPos = function() {
  console.log("newPos");
}