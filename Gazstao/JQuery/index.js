
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
$("h1").click(mudaClasse);
$("button").click(function () {$("h1").toggleClass("yellow")});
$(document).keydown(function(event){
  $("h1").text(event.key);
});

// Funções

function mudaFigura(){
  if ($("img").attr("src") == "mountain.png") $("img").attr("src","cloud.png");
  else $("img").attr("src","mountain.png");
  console.log("Imagem alterada para "+    $("img").attr("src"));
}

function mudaClasse(){
  $("h1").toggleClass("inverted");
}

function botao1(){
  document.querySelectorAll("button")[0].innerText("Cria Botão");
}

// Programa
