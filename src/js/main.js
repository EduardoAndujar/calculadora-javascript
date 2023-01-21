const tela = document.getElementById('tela');

const teclaReiniciar = document.getElementById('tecla_reiniciar');
const teclaApagar = document.getElementById('tecla_apagar');
const teclaDividir = document.getElementById('tecla_dividir');
const teclaMultiplicar = document.getElementById('tecla_multiplicar');
const teclaDiminuir = document.getElementById('tecla_diminuir');
const teclaSomar = document.getElementById('tecla_somar');
const teclaIgual = document.getElementById('tecla_igual');

const teclasNumeros = document.querySelectorAll('.tecla_numero');

var textoTela = '0';
var primeiroNumero = '';
var operacao = 'somar';

function atualizarTela() {
    if (textoTela === '') {
        textoTela = '0';
    }
    tela.textContent = textoTela;
}

function zerar() {
    textoTela = '0';
    atualizarTela();
}

function apagar() {
    textoTela = textoTela.substring(0, textoTela.length - 1);
    console.log('apagar');
    atualizarTela();
}

function definirOperacao(operacao) {
    this.operacao = operacao;
    primeiroNumero = textoTela;
    textoTela = '0';
}
function igual() {
    switch (operacao) {
        case 'dividir':
            textoTela = parseFloat(primeiroNumero) / parseFloat(textoTela);
            operacao = '';
            break;
        case 'multiplicar':
            textoTela = parseFloat(primeiroNumero) * parseFloat(textoTela);
            operacao = '';
            break;
        case 'diminuir':
            textoTela = parseFloat(primeiroNumero) - parseFloat(textoTela);
            operacao = '';
            break;
        case 'somar':
            textoTela = parseFloat(primeiroNumero) + parseFloat(textoTela);
            operacao = '';
            break;
        default:
            textoTela = textoTela;
            break;
    }
    atualizarTela();
}

function concatenarNumero(numero) {
    if (textoTela === '0') {
        textoTela = '';
    }
    textoTela += numero;
    atualizarTela();
}

teclaReiniciar.addEventListener('click', zerar);
teclaApagar.addEventListener('click', apagar);
teclaDividir.addEventListener('click', () => {
    definirOperacao('dividir');
});
teclaMultiplicar.addEventListener('click', () => {
    definirOperacao('multiplicar');
});
teclaDiminuir.addEventListener('click', () => {
    definirOperacao('diminuir');
});
teclaSomar.addEventListener('click', () => {
    definirOperacao('somar');
});
teclaIgual.addEventListener('click', igual);

teclasNumeros.forEach((numero) => {
    numero.addEventListener('click', () => {
        concatenarNumero(numero.textContent);
    });
});

atualizarTela();
