var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
gameStarted = false;
tempoLento = 200;
tempo = 80;

// Exibe Sequencia do Jogo

function nextSequence() {

  // Gera uma cor aleatória no final do gamePattern
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);

  // Pisca o cabeçalho
  $("h1").delay(tempoLento).animate({opacity: 0}, tempoLento);
  $("h1").text("Level " + level);
  $("h1").delay(tempoLento).animate({opacity: 1}, tempoLento);

  // Novo Level, zera resposta do usuário
  level++;
  userPattern = [];

  // Mostra a Sequencia
  for (var i = 0; i < gamePattern.length; i++) {
    setTimeout(piscaBotaoLento(gamePattern[i]),2000);
  }
}

// Funcao para testar a sequencia recebida
function testa() {
  console.log("Testando " + userPattern + " vs " + gamePattern);
    for (var i = 0; i < userPattern.length; i++) {
      if (userPattern[i] != gamePattern[i]) {
        // Game Over!
        gameStarted = false;
        gameOver();
      }
    }
    if (gameStarted && userPattern.length == gamePattern.length) nextSequence();
  }

function gameOver(){
  $("h1").text("Game Over!");
  var som = new Audio("sounds/wrong.mp3");
  $("body").addClass("game-over");
}

function piscaBotao(cor) {
  var som = new Audio("sounds/" + cor + ".mp3");
  som.play();
  $("." + cor).animate({opacity: 0}, tempo);
  $("." + cor).animate({opacity: 1}, tempo);
}

function piscaBotaoLento(cor) {
    var som = new Audio("sounds/" + cor + ".mp3");
    $("." + cor).delay(tempoLento).animate({opacity: 0},
      tempo).animate({opacity: 1}, tempo).delay(tempoLento);
      som.play();
    setTimeout( function(){
    },1000);
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
    if (gameStarted) clica("green");
  });
  $(".red").click(function() {
    if (gameStarted) clica("red");
  });
  $(".yellow").click(function() {
    if (gameStarted) clica("yellow");
  });
  $(".blue").click(function() {
    if (gameStarted) clica("blue");
  });

  // Adiciona listeners para as teclas
  $(document).keydown(function(event) {
    if (!gameStarted) {
      level = 0;
      userPattern = [];
      gamePattern = [];
      gameStarted = true;
      $("body").removeClass("game-over");
      nextSequence();
    } else {
      if (event.key.toLowerCase() == "a") clica("green");
      if (event.key.toLowerCase() == "s") clica("red");
      if (event.key.toLowerCase() == "z") clica("yellow");
      if (event.key.toLowerCase() == "x") clica("blue");
    }
  });
