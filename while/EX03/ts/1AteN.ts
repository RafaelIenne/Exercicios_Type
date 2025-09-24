/**
 * Exercício 03 – Soma 1..N
 * Some todos os números de 1 até N (N=100).
 */

let N: number = 10; //essa variavel vai ser o limite do loop
let soma: number = 0;
let k: number = 1;

while (k <= N) {
  soma += k; //atribui o valor de k e soma com o valor de "soma"
  k++;
}
console.log(`Soma de 1 até ${N} = ${soma}`);