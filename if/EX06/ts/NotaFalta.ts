/**
 * Exercício 06 – Nota e faltas
 * Aprovado se nota >= 7 e faltas <= 10.
 */

let materia: string = "História"; //variavel que recebe a matéria
let notaFinal: number = 4; //variavel que recebe a nota final
let faltas: number = 7; //variavel que receba as faltas

if (notaFinal >= 7 && faltas <= 10) { // && para verificar as duas condições
  console.log(`Aprovado em ${materia}.`);
} else {
  console.log(`Reprovado em ${materia}.`);
}