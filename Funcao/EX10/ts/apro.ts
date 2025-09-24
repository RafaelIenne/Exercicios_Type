/**
 * Exercício 10 – Função aprovação
 * Criar uma função que receba nota e faltas e retorne "Aprovado" ou "Reprovado".
 */

function verificarAprovacao(nota: number, faltas: number): string { //recebe notas e faltas e verifica se está na faixa para ser aprovado
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(verificarAprovacao(5, 5));
console.log(verificarAprovacao(9, 4));