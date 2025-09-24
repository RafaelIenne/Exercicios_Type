/**
 * Exercício 09 – Maior valor do array
 * Percorra o array e encontre o maior elemento.
 */

let nums: number[] = [5, 12, 3, 40, 9, 27, 1];
let iMax: number = 0;
let maior: number = nums[0];//vai receber os números do array

while (iMax < nums.length) {
  if (nums[iMax] > maior) {//compara para ver qual é o maior número
    maior = nums[iMax];
  }
  iMax++;
}

console.log(`Maior valor = ${maior}`);