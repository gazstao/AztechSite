var numeroDeTeclas = document.querySelectorAll(".drum").length;

for (var i = 0 ; numeroDeTeclas ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        alert("Fui clicado!");
    });
}
