/**
 * Exercício 10 – Maior número
 * Mostre qual número é maior entre dois valores.
 */
var a = 15; //verifica o primeiro número para a comparação
var b = 15; //verifica o segundo número para a comparação
if (a > b) { //verifica qual numero é maior, ou se são iguais
    console.log("".concat(a, " \u00E9 maior que ").concat(b, "."));
}
else if (b > a) {
    console.log("".concat(b, " \u00E9 maior que ").concat(a, "."));
}
else {
    console.log("Os números são iguais.");
}
