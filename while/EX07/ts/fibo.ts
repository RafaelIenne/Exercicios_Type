/**
 * Exercício 07 – Fibonacci com while
 * Imprima os 64 primeiros números da sequência.
 */

let a: number = 0;
let b: number = 1;
let termos: number = 64;
let contador: number = 1;

while (contador <= termos) {//calcula a série fibonacci
  console.log(a);
  let proximo = a + b;
  a = b;
  b = proximo;
  contador++;
}