/**
 * Exercício 08 – Soma de array com while
 * Some os valores de um array.
 */

let valores: number[] = [5, 5, 5, 5, 50];
let idx: number = 0;
let total: number = 0;

while (idx < valores.length) { //percorre o array até acabar
  total += valores[idx]; //soma os valores de cada posição do array
  idx++;
}

console.log(`Total = ${total}`);
