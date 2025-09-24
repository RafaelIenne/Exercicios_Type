/**
 * Exercício 14 – continue
 * Liste números de 1 a 20, pulando múltiplos de 3.
 */
var m = 1;
while (m <= 20) {
    if (m % 3 === 0) { // aqui verifica se é um multiplo de 3
        m++; // importante incrementar antes de continuar
        continue; // pula o restante e volta ao while
    }
    console.log(m);
    m++;
}
