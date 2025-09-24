/**
 * Exercício 11 – Inverter string
 * Monte uma nova string com os caracteres na ordem inversa.
 */
var texto = "TypeScript";
var invertido = "";
var p = texto.length - 1; //isso pega o tamanho do texto e a letra    
while (p >= 0) {
    invertido += texto[p]; //mota o texto invertido
    p--;
}
console.log("Original: ".concat(texto));
console.log("Invertido: ".concat(invertido));
