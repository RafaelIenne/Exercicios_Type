// Declara o nome do aluno, suas notas e o número de faltas por matéria
var nomeAluno1 = "Arlindo";
var notaMatematica1 = 6;
var notaPortugues1 = 8;
var notaCiencias1 = 7;
var faltasMatematica1 = 1; // Faltas em Matemática
var faltasPortugues1 = 6; // Faltas em Português
var faltasCiencias1 = 5; // Faltas em Ciências
// Verifica a situação do aluno em cada matéria considerando as faltas
if (notaMatematica1 >= 7 && faltasMatematica1 <= 5) { // && tem que atingir as duas condições
    console.log("".concat(nomeAluno1, " foi aprovado em Matem\u00E1tica!"));
}
else if (faltasMatematica1 > 5) { // else if permite mais um if caso seja necessário
    console.log("".concat(nomeAluno1, " foi reprovado em Matem\u00E1tica devido ao n\u00FAmero de faltas."));
}
else {
    console.log("".concat(nomeAluno1, " foi reprovado em Matem\u00E1tica devido \u00E0 nota."));
}
if (notaPortugues1 >= 7 && faltasPortugues1 <= 5) {
    console.log("".concat(nomeAluno1, " foi aprovado em Portugu\u00EAs!"));
}
else if (faltasPortugues1 > 5) {
    console.log("".concat(nomeAluno1, " foi reprovado em Portugu\u00EAs devido ao n\u00FAmero de faltas."));
}
else {
    console.log("".concat(nomeAluno1, " foi reprovado em Portugu\u00EAs devido \u00E0 nota."));
}
if (notaCiencias1 >= 7 && faltasCiencias1 <= 5) {
    console.log("".concat(nomeAluno1, " foi aprovado em Ci\u00EAncias!"));
}
else if (faltasCiencias1 > 5) {
    console.log("".concat(nomeAluno1, " foi reprovado em Ci\u00EAncias devido ao n\u00FAmero de faltas."));
}
else {
    console.log("".concat(nomeAluno1, " foi reprovado em Ci\u00EAncias devido \u00E0 nota."));
}
