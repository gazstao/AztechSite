var buttonColors = [ "red" , "blue" , "green" , "yellow"];
var gamePattern = [];

function nextSequence(){
  var num = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[num];
  gamePattern.push(randomChosenColour);
  return randomChosenColour;
}
