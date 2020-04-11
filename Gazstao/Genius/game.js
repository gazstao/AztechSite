var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
gameStarted = false;
tempoLento = 200;
tempo = 80;

setTimeout( function () { }, 5000);

function nextSequence() {
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);
  $("h1").delay(tempoLento).animate({opacity:1},tempoLento);
  $("h1").text("Level " + level);
  $("h1").delay(tempoLento).animate({opacity:0},tempoLento);
  level++;
  userPattern = [];
  for (var i = 0; i < gamePattern.length; i++) {
    piscaBotaoLento(gamePattern[i]);
  }
}

function testa() {
  console.log("Testando "+userPattern+" vs "+gamePattern);
  if (gamePattern.length === userPattern.length){
    for (var i=0 ; i<gamePattern.length ; i++){
      if (userPattern[i] != gamePattern[i]){
        gameOver();
      }
    }
    nextSequence();
  }
}

function gameOver(){
  $("h1").text("Game Over!");
  //location.reload();
}

function piscaBotao(cor) {
  var som = new Audio("sounds/" + cor + ".mp3");
  $("." + cor).animate({opacity: 0}, tempo);
  $("." + cor).animate({opacity: 1}, tempo);
  setTimeout(som.play, 1000);
}

function piscaBotaoLento(cor) {
  var som = new Audio("sounds/" + cor + ".mp3");
  som.play();
  $("." + cor).delay(tempoLento).animate({opacity: 0},tempo).delay(tempoLento).animate({opacity: 1},tempo)
}


function clica(cor) {
  if (gameStarted) {
    piscaBotao(cor);
    userPattern.push(cor);
    testa();
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
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});
