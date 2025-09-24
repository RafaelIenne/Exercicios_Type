/**
 * Exercício 07 – Fibonacci com while
 * Imprima os 64 primeiros números da sequência.
 */
var a = 0;
var b = 1;
var termos = 64;
var contador = 1;
while (contador <= termos) { //calcula a série fibonacci
    console.log(a);
    var proximo = a + b;
    a = b;
    b = proximo;
    contador++;
}
