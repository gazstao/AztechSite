var buttonColors = [ "red" , "blue" , "green" , "yellow"];
var gamePattern = [];

function nextSequence(){
  var num = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);
  return randomChosenColour;
}

function piscaBotao(cor){
  var som = new Audio("sounds/"+cor+".mp3");
  som.play();
  $("."+cor).animate({opacity:0}, 80);
  $("."+cor).animate({opacity:1}, 80);
}

function clica(cor){
  piscaBotao(cor);
}

$(".green").click( function (){
  clica("green");
});

$(".red").click( function (){
  clica("red");
});

$(".yellow").click( function (){
  clica("yellow");
});

$(".blue").click( function (){
  clica("blue");
});

$(document).keydown(function (event){
  if (event.key.toLowerCase() == "a") clica("green");
  if (event.key.toLowerCase() == "x") clica("blue");
  if (event.key.toLowerCase() == "z") clica("yellow");
  if (event.key.toLowerCase() == "s") clica("red");
});
