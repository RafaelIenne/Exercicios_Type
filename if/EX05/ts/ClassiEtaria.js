/**
 * Exercício 05 – Classificação etária
 * Criança (<12), Adolescente (12–17), Adulto (18–59), Idoso (60+).
 */
var idadePessoa = 7; //variavel que será verificada
if (idadePessoa < 12) { //if que verifica a idade e atribue a uma classificação etaria
    console.log("Criança");
}
else if (idadePessoa < 18) {
    console.log("Adolescente");
}
else if (idadePessoa < 60) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
