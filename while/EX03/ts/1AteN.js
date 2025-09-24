/**
 * Exercício 03 – Soma 1..N
 * Some todos os números de 1 até N (N=100).
 */
var N = 10; //essa variavel vai ser o limite do loop
var soma = 0;
var k = 1;
while (k <= N) {
    soma += k; //atribui o valor de k e soma com o valor de "soma"
    k++;
}
console.log("Soma de 1 at\u00E9 ".concat(N, " = ").concat(soma));
