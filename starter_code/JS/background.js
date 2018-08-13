var isGameStarted;
var faby2 = new Player(100, 200, 50, 50, 60, 1, 0.4, 0);
var interval;

window.onload = function() {
  backgroundImage.draw();
  faby2.update();
  document.getElementById("start-button").onclick = function() {
    if (!isGameStarted) {
      startGame();
      isGameStarted = true;
    }
  };

  function startGame() {
    faby2 = new Player(100, 200, 50, 50, 60, 1, 0.4, 0);
    interval = setInterval(updateCanvas,20);
    document.onkeydown = function(e) {
      if (e.keyCode === 32) {
        faby2.moveUp();
      }
    };
    document.onkeyup = function(e) {
      if (e.keyCode === 32) {
        faby2.speedY = 5;
      }
    };
  }
};

var img = new Image();
img.src = "images/bg.png";

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

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
  }
};

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.move();
  backgroundImage.draw();
  faby2.newPos();
  faby2.update();
  faby2.stop();

  
}