/**
 * Exercício 06 – Nota e faltas
 * Aprovado se nota >= 7 e faltas <= 10.
 */
var materia = "História"; //variavel que recebe a matéria
var notaFinal = 4; //variavel que recebe a nota final
var faltas = 7; //variavel que receba as faltas
if (notaFinal >= 7 && faltas <= 10) { // && para verificar as duas condições
    console.log("Aprovado em ".concat(materia, "."));
}
else {
    console.log("Reprovado em ".concat(materia, "."));
}
