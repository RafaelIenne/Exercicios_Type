/**
 * Exercício 12 – Função juros simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 */

function jurosSimples(capital: number, taxa: number, tempo: number): number { //recebe os dados necessários para calcular o juros
  return capital + (capital * taxa * tempo);
}

console.log(`VF = R$ ${jurosSimples(2500, 0.10, 5).toFixed(2)}`);