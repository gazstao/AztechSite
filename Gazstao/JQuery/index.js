//alert("JavaScript is Working Fine!");
$("h1").css("background-color","black");
$("h1").css("padding","1rem");
//$("h1").css("max-width","40%");

$("button").addClass("spaced-little rounded-button");
$("a").addClass("spaced");

$("h1").text("Gazstao Funny Site");
$("button").html("<em>Click</em>");
$("img").attr("src", "cloud.png");

console.log("Cor: "+                $("h1").css("color")                    );
console.log("Font Size: "+          $("h1").css("font-size")                );
console.log("Botao arredondado:"+   $("button").hasClass("rounded-button")  );
console.log("Imagem:"+              $("img").attr("src")                    );

function mudaFigura(){
  if ($("img").attr("src") == "mountain.png") $("img").attr("src","cloud.png");
  else $("img").attr("src","mountain.png");
  console.log("Imagem alterada para "+    $("img").attr("src"));
}
