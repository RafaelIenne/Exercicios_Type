/**
 * Exercício 04 – Tabuada com while
 * Mostre a tabuada de um número base (ex.: 7) de 1 a 10.
 */
var base = 9;
var mult = 1;
while (mult <= 10) {
    console.log("".concat(base, " x ").concat(mult, " = ").concat(base * mult)); //faz o calculo da tabuada
    mult++;
}
