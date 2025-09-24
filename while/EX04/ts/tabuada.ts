/**
 * Exercício 04 – Tabuada com while
 * Mostre a tabuada de um número base (ex.: 7) de 1 a 10.
 */

let base: number = 9;
let mult: number = 1;

while (mult <= 10) {
  console.log(`${base} x ${mult} = ${base * mult}`); //faz o calculo da tabuada
  mult++;
}