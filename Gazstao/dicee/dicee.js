// alert("May the lucky be with you!");
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var img1 = "";
var img2 = "";

if (randomNumber1 == 1) img1 = "dice1.png";
else if (randomNumber1 == 2) img1 = "dice2.png";
else if (randomNumber1 == 3) img1 = "dice3.png";
else if (randomNumber1 == 4) img1 = "dice4.png";
else if (randomNumber1 == 5) img1 = "dice5.png";
else if (randomNumber1 == 6) img1 = "dice6.png";

if (randomNumber2 == 1) img2 = "dice1.png";
else if (randomNumber2 == 2) img2 = "dice2.png";
else if (randomNumber2 == 3) img2 = "dice3.png";
else if (randomNumber2 == 4) img2 = "dice4.png";
else if (randomNumber2 == 5) img2 = "dice5.png";
else if (randomNumber2 == 6) img2 = "dice6.png";

document.querySelector(".img1").attributes.src.value = "images/"+img1;
document.querySelector(".img2").attributes.src.value = "images/"+img2;

if ( randomNumber1 > randomNumber2 ) document.querySelector("h1").innerHTML = "Player 1 Wins!" ;
else if ( randomNumber2 > randomNumber1 ) document.querySelector("h1").innerHTML = "Player 2 Wins!" ;
else document.querySelector("h1").innerHTML = "We have a Draw!" ;
