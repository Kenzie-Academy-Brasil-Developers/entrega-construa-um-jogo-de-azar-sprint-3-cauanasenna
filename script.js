const botoes = document.querySelectorAll('button')
botoes.forEach((button) => button.addEventListener('click', (e) => console.log(e.target.id)))

addEventListener('click', function main() {

let jogadorEscolha = 0
let computadorEscolha = 0
let ganhador = 0
let jogadorPontuacao = 0
let computadorPontuacao = 0

// definir jogadas do computador

function computadorEscolhaNome() {
    computadorEscolha = Math.floor((Math.random () *3) +1)
    if (computadorEscolha === 1) {
        computadorEscolha = "pedra";
        document.getElementById('resultado-computador').innerText('Pedra')
    } else if (computadorEscolha === 2){
        computadorEscolha = "papel"
        document.getElementById('resultado-computador').innerText('Papel')
    } else if (computadorEscolha === 3) {
        computadorEscolha = "tesoura"
        document.getElementByIdById('resultado-computador').innerText('Tesoura')
    }
    return computadorEscolha
}

// definir critérios do jogo e quem irá ganhar

function jogar(escolha) {
    jogadorEscolha = escolha

    if (jogadorEscolha === "papel" && computadorEscolha === "papel") {
        ganhador = "empate";
    } else if (jogadorEscolha === "papel" && computadorEscolha === "pedra") {
        ganhador = "jogador";
    } else if (jogadorEscolha === "papel" && computadorEscolha === "tesoura") {
        ganhador = "computador";
    } else if (jogadorEscolha === "pedra" && computadorEscolha === "pedra") {
        ganhador = "empate";
    } else if (jogadorEscolha === "pedra" && computadorEscolha === "papel") {
        ganhador = "computador";
    } else if (jogadorEscolha === "pedra" && computadorEscolha === "tesoura") {
        ganhador = "jogador";
    } else if (jogadorEscolha === "tesoura" && computadorEscolha === "tesoura") {
        ganhador = "empate";
    } else if (jogadorEscolha === "tesoura" && computadorEscolha === "papel") {
        ganhador = "jogador";
    } else if (jogadorEscolha === "tesoura" && computadorEscolha === "pedra") {
        ganhador = "computador";
    }
    return escolha
}

// aparecer mensagem de quem ganhou

function quemGanhou() {

    if (ganhador = "jogador") {
        document.getElementById('resultado').innerText('Parabéns! Você ganhour')
        jogadorPontuacao++
    } else if (ganhador = "empate") {
        document.getElementById('resultado').innerText('Empate!')
    } else if (ganhador = "computador") {
        document.getElementById('resultado').innerText('Ah que pena, você perdeu :(')
        computadorPontuacao++
    }
}
// somar pontos

        document.getElementById('pontos-player').innerHTML = jogadorPontuacao 
        document.getElementById('pontos-computador').innerHTML = computadorPontuacao 

return ganhador

}) //fim da funçao main