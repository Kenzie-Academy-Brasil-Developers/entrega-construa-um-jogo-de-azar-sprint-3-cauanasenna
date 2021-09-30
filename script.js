let jogadorEscolha = ''
let computadorEscolha = ''
let computadorNome = ''
let ganhador = ''
let jogadorPontuacao = 0
let computadorPontuacao = 0

const botoes = document.querySelectorAll('button')
console.log(botoes)
botoes.forEach((button) => button.addEventListener('click', function (evt) { 
    jogadorEscolha = evt.target.id
    console.log('jogador escolheu: ' + jogadorEscolha)
    console.log('jogada do computador: ' + computadorEscolhaNome())
    computadorEscolhaNome()
    console.log('nome jogada do computador: ' + computadorNome)
    jogar()
    console.log('nome ganhador: ' + ganhador)
    quemGanhou()
    console.log('quem ganhou: ' + quemGanhou())
    console.log(jogadorPontuacao)
    console.log(computadorPontuacao)

    computadorEscolha = evt.target.id
    ganhador = evt.target.id


document.getElementById('pontos-player').innerHTML = jogadorPontuacao
document.getElementById('pontos-computador').innerHTML = computadorPontuacao

    
}))

//button.addEventListener('click', function main() { // estou chamando a função main que vai acontecer tudo o que coloquei embaixo quando eu der um clique no botão


// definir jogadas do computador

function computadorEscolhaNome() {
    computadorEscolha = Math.floor((Math.random() * 3) + 1)
    let showComputer = document.getElementById('resultado-computador')
    if (computadorEscolha === 1) {
        computadorNome = "pedra";
        showComputer.innerText ='Pedra'
    } else if (computadorEscolha === 2) {
        computadorNome = "papel"
        showComputer.innerText ='Papel'
    } else if (computadorEscolha === 3) {
        computadorNome = "tesoura"
        showComputer.innerText ='Tesoura'
    }
    return computadorNome
}

// definir critérios do jogo e quem irá ganhar

function jogar() {
    console.log('função jogar ' + jogadorEscolha)

    if (jogadorEscolha === "papel" && computadorNome === "papel") {
        ganhador = "empate";
    } else if (jogadorEscolha === "papel" && computadorNome === "pedra") {
        ganhador = "jogador";
    } else if (jogadorEscolha === "papel" && computadorNome === "tesoura") {
        ganhador = "computador";
    } else if (jogadorEscolha === "pedra" && computadorNome === "pedra") {
        ganhador = "empate";
    } else if (jogadorEscolha === "pedra" && computadorNome === "papel") {
        ganhador = "computador";
    } else if (jogadorEscolha === "pedra" && computadorNome === "tesoura") {
        ganhador = "jogador";
    } else if (jogadorEscolha === "tesoura" && computadorNome === "tesoura") {
        ganhador = "empate";
    } else if (jogadorEscolha === "tesoura" && computadorNome === "papel") {
        ganhador = "jogador";
    } else if (jogadorEscolha === "tesoura" && computadorNome === "pedra") {
        ganhador = "computador";
    }
    return ganhador
}

// aparecer mensagem de quem ganhou

function quemGanhou() {

    let showWinner =  document.getElementById('resultado-centro-winner')

    if (ganhador === "jogador") {
        showWinner.innerText = 'Parabéns! Você ganhou'
        jogadorPontuacao += 1/2
    } else if (ganhador === "empate") {
        showWinner.innerText ='Empate!'
    } else if (ganhador === "computador") {
        showWinner.innerText = 'Ah que pena, você perdeu :('
        computadorPontuacao +=1/2
    }
    return showWinner
}

// somar pontos




//}) //fim da funçao main