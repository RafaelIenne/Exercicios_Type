/**
 * Exercício 14 – Triângulo válido
 * Verifique se 3 lados formam um triângulo.
 * Regra: cada lado < soma dos outros dois.
 */

let lado1: number = 9;
let lado2: number = 8;
let lado3: number = 3;//variaveis que recebem o numero de cada lado do triangulo

if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {//if que verifica cada lado e se épossivel fazer um triangulo com isso
  console.log("Forma um triângulo válido.");
} else {
  console.log("Não forma um triângulo.");
}