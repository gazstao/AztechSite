var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
gameStarted = false;

function nextSequence() {
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);
  $("h1").text("Level "+level);
  level++;
  piscaBotao(randomChosenColour);
}

function piscaBotao(cor) {
  var som = new Audio("sounds/" + cor + ".mp3");
  som.play();
  $("." + cor).animate({
    opacity: 0
  }, 80);
  $("." + cor).animate({
    opacity: 1
  }, 80);
}

function clica(cor) {
  if (gameStarted) {
    piscaBotao(cor);
    userPattern.push(cor);
  }
}

// Adiciona listeners para os cliques
$(".green").click(function() {
  clica("green");
});
$(".red").click(function() {
  clica("red");
});
$(".yellow").click(function() {
  clica("yellow");
});
$(".blue").click(function() {
  clica("blue");
});

// Adiciona listeners para as teclas
$(document).keydown(function(event) {
  if (event.key.toLowerCase() == "a") clica("green");
  if (event.key.toLowerCase() == "s") clica("red");
  if (event.key.toLowerCase() == "z") clica("yellow");
  if (event.key.toLowerCase() == "x") clica("blue");
  if (!gameStarted){
    gameStarted = true;
    nextSequence();
  }
});
