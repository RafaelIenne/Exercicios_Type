/**
 * Exercício 06 – Fatorial
 * Calcule 5! usando while (5*4*3*2*1).
 */
var num = 9;
var fat = 1;
var c = num;
while (c > 1) {
    fat *= c; // calcula a fatorial do numero
    c--;
}
console.log("".concat(num, "! = ").concat(fat));
