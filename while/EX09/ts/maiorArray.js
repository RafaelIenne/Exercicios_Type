/**
 * Exercício 09 – Maior valor do array
 * Percorra o array e encontre o maior elemento.
 */
var nums = [5, 12, 3, 40, 9, 27, 1];
var iMax = 0;
var maior = nums[0]; //vai receber os números do array
while (iMax < nums.length) {
    if (nums[iMax] > maior) { //compara para ver qual é o maior número
        maior = nums[iMax];
    }
    iMax++;
}
console.log("Maior valor = ".concat(maior));
