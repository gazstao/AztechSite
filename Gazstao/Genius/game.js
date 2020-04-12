var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var recorde = 0;
gameStarted = false;

// Exibe Sequencia do Jogo

function nextSequence() {

  // Gera uma cor aleatória no final do gamePattern
  var num = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);
  console.log("gamePattern:"+gamePattern);

  // Pisca o cabeçalho
  $("h1").animate({opacity: 0});
  $("h1").text("Level " + level);
  $("h1").animate({opacity: 1});

  // Novo Level, zera resposta do usuário
  level++;
  userPattern = [];

  // Mostra ultimo
  setTimeout(function(){
    piscaBotao(randomChosenColour);
  },1500);
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
  if (level-1 > recorde) recorde = level-1;
  $("h1").text("Game Over! Record: "+recorde);
  var som = new Audio("sounds/wrong.mp3");
  $("body").addClass("game-over");
}

function piscaBotao(cor) {
  var som = new Audio("sounds/" + cor + ".mp3");
  som.play();
  $("." + cor).animate({opacity: 0},200);
  $("." + cor).animate({opacity: 1},200);
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

    // se o jogo não começou, inicializa tudo
    if (!gameStarted) {
      level = 0;
      userPattern = [];
      gamePattern = [];
      gameStarted = true;
      $("body").removeClass("game-over");
      nextSequence();
    }

    // se o jogo já começou, adiciona na sequencia
    else {
      if (event.key.toLowerCase() == "a") clica("green");
      if (event.key.toLowerCase() == "s") clica("red");
      if (event.key.toLowerCase() == "z") clica("yellow");
      if (event.key.toLowerCase() == "x") clica("blue");
    }
  });
