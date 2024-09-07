// Wait till the browser is ready to render the game (avoids glitches)
var game;
window.requestAnimationFrame(function () {
  game = new GameManager(size, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

var last = '';
var dir = 0;
var cnt = 0;

var mover = undefined;

function doMovementPattern(moveType) {
  if (typeof(mover) != 'undefined') {
    clearInterval(mover);
  }
  mover = setInterval(moveType, 1);
}

function stopMovement() {
  mover = clearInterval(mover);
}

function corner() {
  if (game == null || typeof(game) === "undefined") {
    return;
  }
  var item = document.getElementById('tile-container');
    if (++cnt > 0) {
      dir = 1 - dir;
      cnt = 0;
    }
  if (0 === dir) {
    game.move(0);
    setTimeout(function() {game.move(3)}, 25);
  } else {
    game.move(0);
    setTimeout(function() {game.move(1)}, 25);
  }
}

function swing() {
  if (game == null || typeof(game) === "undefined") {
    return;
  }
  var item = document.getElementById('tile-container'); {
    if (++cnt > 0) {
      dir = 1 - dir;
      cnt = 0;
    }
  }
  if (0 === dir) {
    game.move(0);
    setTimeout(function() {game.move(2)}, 25);
  } else {
    game.move(1);
    setTimeout(function() {game.move(3)}, 25);
  }
}

function swirl() {
  dir = (dir + 1) % 4;
  game.move(dir);
}

function random() {
  game.move(Math.floor(Math.random() * 4));
}
