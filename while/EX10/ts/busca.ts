/**
 * Exercício 10 – Busca linear com while
 * Verifique se um valor existe no array; se achar, pare (break).
 */

let lista: string[] = ["sql", "ts", "js", "python", "go"];
let alvo: string = "go"; //coloca um alvo a ser atingido
let pos: number = 0;
let encontrado: boolean = false;

while (pos < lista.length) {
  if (lista[pos] === alvo) { //vai passando por todos até encontrar oq precisa
    encontrado = true;
    break; // interrompe o loop quando encontra
  }
  pos++;
}
console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");