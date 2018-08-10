var faby = new Player(50,50,5,0,0,0);



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  }

};


var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var score = 0;



