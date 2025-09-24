// Declara o nome do aluno e suas notas
var nomeAluno = "Arlindo"; //string serve para declarar apenas caractéries
var notaMatematica = 6;
var notaPortugues = 10;
var notaCiencias = 7;
// Verifica a situação do aluno em cada matéria
if (notaMatematica >= 7) { //se (algo) {acontece} 
    console.log("".concat(nomeAluno, " foi aprovado em Matem\u00E1tica!")); // usar " ` " para colocar variaveis aparecendo junto a string
}
else { //senão {acontece}
    console.log("".concat(nomeAluno, " foi reprovado em Matem\u00E1tica."));
}
if (notaPortugues >= 7) {
    console.log("".concat(nomeAluno, " foi aprovado em Portugu\u00EAs!"));
}
else {
    console.log("".concat(nomeAluno, " foi reprovado em Portugu\u00EAs."));
}
if (notaCiencias >= 7) {
    console.log("".concat(nomeAluno, " foi aprovado em Ci\u00EAncias!"));
}
else {
    console.log("".concat(nomeAluno, " foi reprovado em Ci\u00EAncias."));
}
