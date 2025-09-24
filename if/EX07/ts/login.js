/**
 * Exercício 07 – Login simples
 * Verifique se usuário e senha estão corretos.
 */
var usuario = "admin"; //variavel que recebe o nome do usuário
var senha = "479Q6"; //variavel senha deve ser string porque a senha pode conter simbolos e/ou letras
if (usuario === "admin" && senha === "479Q6") { //faz a verificação
    console.log("Login realizado com sucesso!");
}
else {
    console.log("Usuário ou senha inválidos.");
}
