// Declara o nome do aluno e suas notas
const nomeAluno: string = "Arlindo"; //string serve para declarar apenas caractéries
const notaMatematica: number = 6;
const notaPortugues: number = 10;
const notaCiencias: number = 7;

// Verifica a situação do aluno em cada matéria
if (notaMatematica >= 7) { //se (algo) {acontece} 
    console.log(`${nomeAluno} foi aprovado em Matemática!`); // usar " ` " para colocar variaveis aparecendo junto a string
} else { //senão {acontece}
    console.log(`${nomeAluno} foi reprovado em Matemática.`);
}

if (notaPortugues >= 7) {
    console.log(`${nomeAluno} foi aprovado em Português!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Português.`);
}

if (notaCiencias >= 7) {
    console.log(`${nomeAluno} foi aprovado em Ciências!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Ciências.`);
}