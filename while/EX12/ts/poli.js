/**
 * Exercício 12 – Palíndromo
 * Verifique se a palavra é igual quando lida ao contrário.
 */
var palavra = "radiante";
var esq = 0;
var dir = palavra.length - 1;
var ehPalindromo = true; //é oq verifica se é ou não
while (esq < dir) {
    if (palavra[esq] !== palavra[dir]) { //se a palavra de tras pra frente e de frente para tras forem diferente não é um polimdromo
        ehPalindromo = false;
        break;
    }
    esq++;
    dir--;
}
console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");
