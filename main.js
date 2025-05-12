const botoes = document.querySelectorAll(".botao");

for(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("botaoCor");

        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("botaoCor");

    }
}

