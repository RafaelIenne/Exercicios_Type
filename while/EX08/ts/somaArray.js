/**
 * Exercício 08 – Soma de array com while
 * Some os valores de um array.
 */
var valores = [5, 5, 5, 5, 50];
var idx = 0;
var total = 0;
while (idx < valores.length) { //percorre o array até acabar
    total += valores[idx]; //soma os valores de cada posição do array
    idx++;
}
console.log("Total = ".concat(total));
