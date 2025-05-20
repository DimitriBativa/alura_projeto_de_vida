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