function Player(w, h, speedX, speedY, g, gSpeed) {
  this.w = w;
  this.h = h;
  this.speedX = speedX;
  this.speedY = speedY;
  this.g = g;
  this.gSpeed = gSpeed;
}
Player.prototype.update = function() {
  console.log("update");
  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 100, 100, 50,50);
  };
  img.src = "images/flappy.png";
};

Player.prototype.newPos = function() {
  console.log("newPos");
    this.x += this.speedX;
    this.y += this.speedY; 
}
this.left   = function() { return this.x                 }
this.right  = function() { return (this.x + this.width)  }
this.top    = function() { return this.y                 }
this.bottom = function() { return this.y + (this.height) }

                                                            this.crashWith = function(obstacle) {
  return !((this.bottom() < obstacle.top())    ||
           (this.top()    > obstacle.bottom()) ||
           (this.right()  < obstacle.left())   ||
           (this.left()   > obstacle.right())) 
}


// };
