/**
 * Exercício 12 – Palíndromo
 * Verifique se a palavra é igual quando lida ao contrário.
 */

let palavra: string = "radiante";
let esq: number = 0;
let dir: number = palavra.length - 1;
let ehPalindromo: boolean = true; //é oq verifica se é ou não

while (esq < dir) {
  if (palavra[esq] !== palavra[dir]) { //se a palavra de tras pra frente e de frente para tras forem diferente não é um polimdromo
    ehPalindromo = false;
    break;
  }
  esq++;
  dir--;
}

console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");