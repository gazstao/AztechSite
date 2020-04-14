var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var recorde = 0;
gameStarted = false;

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

$(document).click(function(){
  if(!gameStarted) iniciaJogo();
});

// Adiciona listeners para as teclas
$(document).keydown(function(event) {
  if (event.key.toLowerCase() == "a") clica("green");
  if (event.key.toLowerCase() == "s") clica("red");
  if (event.key.toLowerCase() == "z") clica("yellow");
  if (event.key.toLowerCase() == "x") clica("blue");
});

// se o jogo não começou, inicializa tudo
function iniciaJogo() {
  console.log("Iniciando jogo!");
  level = 0;
  userPattern = [];
  gamePattern = [];
  gameStarted = true;
  $("body").removeClass("game-over");
  nextSequence();
}

function piscaBotao(cor) {
  var som = new Audio("sounds/" + cor + ".mp3");
  som.play();
  $("." + cor).animate({
    opacity: 0
  }, 200);
  $("." + cor).animate({
    opacity: 1
  }, 200);
}

function clica(cor) {
  if (gameStarted) {
    piscaBotao(cor);
    userPattern.push(cor);
    testa();
  } else {
    iniciaJogo();
  }
}

// Funcao para testar a sequencia recebida
function testa() {
  console.log("Testando " + userPattern + " vs " + gamePattern);
  for (var i = 0; i < userPattern.length; i++) {
    if (userPattern[i] != gamePattern[i]) {
      // Game Over!
      gameOver();
    }
  }
  if (gameStarted && userPattern.length == gamePattern.length) nextSequence();
}

// Funcao fim de jogo
function gameOver() {
  gameStarted = false;
  if (level - 1 > recorde) recorde = level - 1;
  $("h1").text("Game Over! Record: " + recorde);
  $("body").addClass("game-over");
  setTimeout(function() {
    var som = new Audio("sounds/wrong.mp3");
    som.play();
  }, 500);
}

// Exibe Sequencia do Jogo

function nextSequence() {

  // Gera uma cor aleatória no final do gamePattern
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);
  console.log("gamePattern:" + gamePattern);

  // Pisca o cabeçalho
  $("h1").animate({   opacity: 0});
  $("h1").text("Level " + level);
  $("h1").animate({opacity: 1});

  // Novo Level, zera resposta do usuário
  level++;
  userPattern = [];

  // Mostra ultimo
  setTimeout(function (){
    piscaBotao(randomChosenColour);
  },500);

}
