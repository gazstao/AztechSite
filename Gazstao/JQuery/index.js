// Alterando Atributos CSS

$("h1").css("background-color", "black");
$("h1").css("padding", "1rem");

// Adicionando Classes

$("button").addClass("spaced-little rounded-button");
$("a").addClass("spaced");

// Alterando o texto, html e atributos

$("h1").text("Gazstao Funny Site");
$("button").html("<em>Click</em>");
$("img").attr("src", "cloud.png");

// Console Log de vários parâmetros

console.log("Cor: " + $("h1").css("color"));
console.log("Font Size: " + $("h1").css("font-size"));
console.log("Botao arredondado:" + $("button").hasClass("rounded-button"));
console.log("Imagem:" + $("img").attr("src"));

// Adicionando Listener

$("img").click(mudaFigura);
$("h1").click(function() {
  $("h1").toggleClass("inverted")
});

$("button").click(function() {
  $("h1").toggleClass("yellow")
});

$(document).keydown(function(event) {
  var texto = $("h1").text() + event.key;
  if (event.key == "Enter") {
    texto="";
    $("h1").slideUp(); // fadeIn, show, slideDown, fadeToggle, toggle
    $("img").slideUp().slideDown().animate({opacity: 0.5});
  } else {
    $("img").slideUp(400, function(){$("h1").slideDown(1000)}).slideDown().animate({opacity: 1});
     // fadeOut, hide, slideUp, slideToogle, toggle
  }
  $("h1").text(texto);
});

$(".b1").text("AddButtons");
$(".b1").click(function botao1Listener() {
  $("h1").innerText = "TheButton";
  $("h1").append("<button class='rounded onthefly'>Appended</button>");
  $("h1").prepend("<button class='rounded onthefly'>Prepepended</button>");
  $("h1").before("<button class='rounded onthefly'>Befored</button>");
  $("h1").after("<button class='rounded onthefly'>Aftered</button>");
  $("body").css("background-color", "yellow");
});

$(".b2").text("Azul");
$(".b2").click(function() {
  $("body").css("background-color", "blue");
});

$(".b3").text("Vermelha");
$(".b3").click(function() {
  $("body").css("background-color", "red");
});

$(".b4").text("Verde");
$(".b4").click(function() {
  $("body").css("background-color", "green");
});

$(".b5").text("Cinza");
$(".b5").click(function() {
  $("body").css("background-color", "grey");
});


$(".b6").text("Preto");
$(".b6").click(function() {
  $("body").css("background-color", "black");
});

$(".b7").text("RemoveButtons");
$(".b7").click(function botao5Listener() {
  $("h1").innerText = "TheButton";
  $(".onthefly").remove();
  $("body").css("background-color", "purple");
  $("h1").text("Santiago");
});

// Funções

function mudaFigura() {
  if ($("img").attr("src") == "mountain.png") $("img").attr("src", "cloud.png");
  else $("img").attr("src", "mountain.png");
  console.log("Imagem alterada para " + $("img").attr("src"));
}
