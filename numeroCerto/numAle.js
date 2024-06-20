const rl = require('readline-sync')

let numAleatorioLaco = Math.floor(Math.random() * (100 - 1) + 1)
let tentativas = 0;
let laco = true;
let tentativa = 0

while (laco) {

    tentativa = rl.questionInt("Digite um valor entre 1 e 100: ")

    if (tentativa > numAleatorioLaco) {
        console.log("O número é mais alto.");
        tentativas++
    } else if (tentativa < numAleatorioLaco) {
        console.log("O número é mais baixo.");
        tentativas++
    } else {
        console.log(`Parabéns! Você acertou o número. O número de tentativas foi de ${tentativas}.`);
        laco = false;
    }
}
/*
<script>
const numAleatorioLaco = Math.floor(Math.random() * 100) + 1;
let tentativas = 1

function numAleatorio() {
    const tentativa = parseInt(document.getElementById('guess').value);
    const exibirResultado = document.getElementById('resultado');


    if (tentativa > numAleatorioLaco) {
        exibirResultado.textContent = 'O número é mais alto sorteado.';
        tentativas++

    } else if (tentativa < numAleatorioLaco) {
        exibirResultado.textContent = 'O número é mais baixo sorteado.';
        tentativas++

    } else {
        exibirResultado.textContent = `Parabéns! Você acertou o número é ${numAleatorioLaco}. E o número de tentativas foi ${tentativas}`;
        laco = false
    }
}


</script>
*/
