var tabela = document.querySelector("table");
var ajudaRemover = document.querySelector(".ajuda-p");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out");
    ajudaRemover.classList.add("fade-out_p");

    setTimeout(function removeLinha(){
        event.target.parentNode.remove();
    },500)
})