let jogadorEscolha = ''
let computadorEscolha = ''
let ganhador = 0
let jogadorPontuacao = 0
let computadorPontuacao = 0

const botoes = document.querySelectorAll('button')
console.log(botoes)
botoes.forEach((button) => button.addEventListener('click', function (evt) { 
    jogadorEscolha = evt.target.id
    console.log(jogadorEscolha)
    console.log(computadorEscolhaNome())
    console.log(quemGanhou())
    
    computadorEscolha = evt.target.id
    ganhador = evt.target.id
    quemGanhou()
}))

//button.addEventListener('click', function main() { // estou chamando a função main que vai acontecer tudo o que coloquei embaixo quando eu der um clique no botão


// definir jogadas do computador

function computadorEscolhaNome() {
    computadorEscolha = Math.floor((Math.random() * 3) + 1)
    let showComputer = document.getElementById('resultado-computador')
    if (computadorEscolha === 1) {
        computadorEscolha = "pedra";
        showComputer.innerText ='Pedra'
    } else if (computadorEscolha === 2) {
        computadorEscolha = "papel"
        showComputer.innerText ='Papel'
    } else if (computadorEscolha === 3) {
        computadorEscolha = "tesoura"
        showComputer.innerText ='Tesoura'
    }
    return computadorEscolha
}

// definir critérios do jogo e quem irá ganhar

function jogar() {
    console.log('função jogar ' + jogadorEscolha)

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
    return ganhador
}

// aparecer mensagem de quem ganhou

function quemGanhou() {

    let showWinner =  document.getElementById('resultado-centro-winner')

    if (ganhador = "jogador") {
        showWinner.innerText = 'Parabéns! Você ganhou'
        jogadorPontuacao++
    } else if (ganhador = "empate") {
        showWinner.innerText ='Empate!'
    } else if (ganhador = "computador") {
        showWinner.innerText = 'Ah que pena, você perdeu :('
        computadorPontuacao++
    }
    return ganhador
}
// somar pontos

document.getElementById('pontos-player').innerHTML = jogadorPontuacao
document.getElementById('pontos-computador').innerHTML = computadorPontuacao



//}) //fim da funçao main