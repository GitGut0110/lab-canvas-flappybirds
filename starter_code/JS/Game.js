window.onload = function() {
    var img = new Image();
    img.src = "images/bg.png";
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var bird;
    var counter;
    var obstacles;
    var interval;
    var button = document.getElementById("start-button");
    button.addEventListener("click", startGame);
  
    function startGame() {
      button.removeEventListener("click", startGame);
      document.onkeydown = function(e) {
        if (e.keyCode === 38) {
          bird.moveUp();
        }
      };
  
      document.onkeyup = function(e) {
        bird.speedY = 5;
      };
      bird = new Bird(100, 200, 50, 35, ctx);
      img = new Image();
      img.src = "images/bg.png";
      obstacles = [];
      counter = 0;
      interval = setInterval(updateCanvas, 11);
      console.log("starting", interval);
    }
  
    function updateScore() {
      points = Math.floor(counter / 6);
      ctx.font = "20px bold";
      ctx.fillStyle = "white";
      ctx.fillText("Score: " + points, 800, 30);
    }
  
    function randomNumber(max) {
      return Math.floor(Math.random() * max);
    }
  
    var backgroundImage = {
      img: img,
      x: 0,
      speed: -1,
  
      move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
      },
  
      draw: function() {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
          ctx.drawImage(this.img, this.x + canvas.width, 0);
        } else {
          ctx.drawImage(this.img, this.x - this.img.width, 0);
        }
      }
    };
  
    function updateCanvas() {
      if (counter % 300 === 0) {
        var heightTop = randomNumber(400);
        obstacles.unshift(new Obstacle(900, 0, 50, heightTop, "top", ctx));
        var heightBot = randomNumber(504 - heightTop - 110);
        obstacles.unshift(
          new Obstacle(900, 504 - heightBot, 50, heightBot, "bottom", ctx)
        );
      }
      backgroundImage.move();
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();
      bird.newPos();
      bird.update();
      drawObstacles();
      updateScore();
      counter++;
    }
  
    function drawObstacles() {
      for (var obst of obstacles) {
        obst.move();
        obst.update();
        if (obst.crashWith(bird)) {
          clearInterval(interval);
          ctx.font = "50px bold";
          ctx.fillStyle = "red";
          ctx.fillText("Gameover!", 380, 220);
          points = Math.floor(counter / 6);
          ctx.font = "25px bold";
          ctx.fillText(points + " Points", 435, 250);
          button.addEventListener("click", startGame);
        }
        obstacles = obstacles.slice(0, 6);
      }
    }
  };