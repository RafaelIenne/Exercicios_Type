/**
 * Exercício 14 – Triângulo válido
 * Verifique se 3 lados formam um triângulo.
 * Regra: cada lado < soma dos outros dois.
 */
var lado1 = 9;
var lado2 = 8;
var lado3 = 3; //variaveis que recebem o numero de cada lado do triangulo
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) { //if que verifica cada lado e se épossivel fazer um triangulo com isso
    console.log("Forma um triângulo válido.");
}
else {
    console.log("Não forma um triângulo.");
}
