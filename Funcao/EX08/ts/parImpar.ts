
/**
 * Exercício 08 – Função par ou ímpar
 * Criar uma função que receba um número e diga se é par ou ímpar.
 */

function parOuImpar(n: number): string {//recebe um número e fala se é par ou ímpar
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(`15 é ${parOuImpar(15)}`);