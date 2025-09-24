/**
 * Exercício 09 – Função média de notas
 * Criar uma função que receba 3 notas e retorne a média.
 */

function media(n1: number, n2: number, n3: number): number { //recebe 3 números e faz a média desles
  return (n1 + n2 + n3) / 3;
}

console.log(`Média = ${media(9, 5, 7).toFixed(2)}`);