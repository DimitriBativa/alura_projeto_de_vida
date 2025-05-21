const botoes = document.querySelectorAll(".botao");
const abasConteudo = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe 'ativo' de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("botaoCor");
            abasConteudo[j].classList.remove("ativo"); // Esconde todas as abas
        }
        
        // Adiciona a classe 'ativo' ao botão clicado
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("botaoCor");
        abasConteudo[i].classList.add("ativo"); // Mostra a aba correspondente
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-05T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}