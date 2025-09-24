/**
 * Exercício 13 – do...while
 * Some números aleatórios de 1 a 10 até ultrapassar 50.
 * (Sem entrada do usuário; apenas demontração de do...while)
 */
var acumulador = 0;
var sorteado;
do {
    // "Simula" um número entre 1 e 10 (inteiro)
    sorteado = Math.floor(Math.random() * 10) + 1;
    acumulador += sorteado; // soma um numero aleatório pelo menos uma vez
    console.log("Sorteado: ".concat(sorteado, " | Acumulado: ").concat(acumulador));
} while (acumulador <= 50); //acontece enquanto for menor ou igual a 50
console.log("Limite atingido!");
