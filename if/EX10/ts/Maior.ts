/**
 * Exercício 10 – Maior número
 * Mostre qual número é maior entre dois valores.
 */

let a: number = 15;//verifica o primeiro número para a comparação
let b: number = 15;//verifica o segundo número para a comparação

if (a > b) { //verifica qual numero é maior, ou se são iguais
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  console.log(`${b} é maior que ${a}.`);
} else {
  console.log("Os números são iguais.");
}