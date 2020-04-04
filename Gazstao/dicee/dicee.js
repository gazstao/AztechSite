// alert("May the lucky be with you!");
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var img1 = "";
var img2 = "";

img1 = "dice" + randomNumber1 + ".png";
img2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img1").attributes.src.value = "images/"+img1;
document.querySelector(".img2").attributes.src.value = "images/"+img2;

if ( randomNumber1 > randomNumber2 ) document.querySelector("h1").innerHTML = "Jogador 1 Venceu!" ;
else if ( randomNumber2 > randomNumber1 ) document.querySelector("h1").innerHTML = "Jogador 2 Venceu!" ;
else document.querySelector("h1").innerHTML = "Temos um empate!" ;
