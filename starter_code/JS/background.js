var faby2 = new Player(100,200,50,50,60,60,0,0)

var img = new Image();
img.src = "images/bg.png"

var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  z: 0,
  speed: -1,

  move: function() {
    this.z += this.speed;
    this.z %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.z, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.z + canvas.width, 0);
    } else {
     ctx.drawImage(this.img, this.z - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  backgroundImage.move();
  faby2.update();
  // faby2.newPos();
  




  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;
