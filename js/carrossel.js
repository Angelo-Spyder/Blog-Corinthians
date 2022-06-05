
//CAPTURA DE DADOS
var bolinhas = document.querySelector(".bolinhas");
var quantidade = document.querySelectorAll(".slide .imagem");
var imagen = document.getElementById("atual");
var proximo = document.querySelector("#proximo");
var voltar = document.querySelector("#voltar");
var atual = 0;
var rolar = true;

var largura = window.screen.width;

//CRIANDO AS BOLINHAS
for(let i = 0; i < quantidade.length; i++){
    var divBolinhas = document.createElement("div");
    divBolinhas.id = i;

    bolinhas.appendChild(divBolinhas);
};

bolinhas.addEventListener("click", function(event){
    if(event.target.id != ""){
        atual = event.target.id
        rolar = false
        slide()
    }

})

/*INTERAÇÃO DO USUÁRIO NO CARROSEEL*/

//Adicionando mudança de cor nsa bolinhas
document.getElementById("0").classList.add("imgAtual")

voltar.addEventListener("click", function(){
    atual--
    rolar = false
    slide()
})

proximo.addEventListener("click", function(){
    atual++
    rolar = false
    slide()
})

function slide(){

    if(atual >= quantidade.length){
        atual = 0
    }else if(atual < 0){
        atual = quantidade.length - 1
    }
    document.querySelector(".imgAtual").classList.remove("imgAtual");
    if(largura < 678){
        imagen.style.marginLeft = -400*atual + "px";
    }else{
        imagen.style.marginLeft = -1024*atual + "px";
    }
    document.getElementById(atual).classList.add("imgAtual");
}

setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }else{
        rolar = true
    }
},4000)