/**
 * Exercício 09 – Senha forte
 * Verifique se a senha tem pelo menos 8 caracteres.
 */

let senhaNova: string = "oito9"; //recebe a senha

if (senhaNova.length >= 8) { //verifica se a senha tem mais de 8 caracteres
  console.log("Senha forte.");
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}