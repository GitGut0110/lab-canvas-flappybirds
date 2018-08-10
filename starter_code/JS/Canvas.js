var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var g = 0.5;

var score = 0;

var faby = new Player(10, 10, 5, 0, 0, 0);


document.onkeydown = function(e) {
 console.log('flap')
  }

function updateCanvas() {
  ctx.clearRect(0, 0, 1500, 1700);
  ctx.fillText("faby_x: " + faby.x, 580, 40);
  ctx.fillText("faby_y: " + faby.y, 580, 60);
  draw();
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  requestAnimationFrame(updateCanvas);
}

updateCanvas();
