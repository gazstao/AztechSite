
// Alterando Atributos CSS

$("h1").css("background-color","black");
$("h1").css("padding","1rem");

// Adicionando Classes

$("button").addClass("spaced-little rounded-button");
$("a").addClass("spaced");

// Alterando o texto, html e atributos

$("h1").text("Gazstao Funny Site");
$("button").html("<em>Click</em>");
$("img").attr("src", "cloud.png");

// Console Log de vários parâmetros

console.log("Cor: "+                $("h1").css("color")                    );
console.log("Font Size: "+          $("h1").css("font-size")                );
console.log("Botao arredondado:"+   $("button").hasClass("rounded-button")  );
console.log("Imagem:"+              $("img").attr("src")                    );

// Adicionando Listener

$("img").click(mudaFigura);
$("h1").click(function (){$("h1").toggleClass("inverted")});

$("button").click(function () {$("h1").toggleClass("yellow")});

$(document).keydown(function(event){
  $("h1").text(event.key);
});

$(".b1").text("AddButtons");
$(".b1").click( function botao1Listener(){
    $("h1").innerText = "TheButton";
    $("h1").append("<button class='rounded onthefly'>Appended</button>");
    $("h1").prepend("<button class='rounded onthefly'>Prepepended</button>");
    $("h1").before("<button class='rounded onthefly'>Befored</button>");
    $("h1").after("<button class='rounded onthefly'>Aftered</button>");
});

$(".b5").text("RemoveButtons");
$(".b5").click(function botao5Listener(){
    $("h1").innerText = "TheButton";
    $(".onthefly").remove();
    $("body").css("background-color","purple");
  });

$(".b3").text("Vermelha");
$(".b3").click(function(){
  $("body").css("background-color","red");
});

$(".b2").text("Azul");
$(".b2").click(function(){
  $("body").css("background-color","blue");
});

$(".b4").text("Verde");
$(".b4").click(function(){
  $("body").css("background-color","green");
});

// Funções

function mudaFigura(){
  if ($("img").attr("src") == "mountain.png") $("img").attr("src","cloud.png");
  else $("img").attr("src","mountain.png");
  console.log("Imagem alterada para "+    $("img").attr("src"));
}
