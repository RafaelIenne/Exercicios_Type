/**
 * Exercício 14 – Função calculadora
 * Criar uma função que recebe dois números e um operador (+, -, *, /).
 */

function calculadora(a: number, b: number, op: string): number { //recebe 2 valores e uma operação a ser feita, com isso retorna o resultado
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) {//condição a mais para evitar erros
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }
  console.log("Operador inválido!");
  return NaN;
}

// Exemplos
console.log(calculadora(20, 5, "+"));
console.log(calculadora(12, 2, "-"));
console.log(calculadora(5, 5, "*"));
console.log(calculadora(4000, 0, "/"));