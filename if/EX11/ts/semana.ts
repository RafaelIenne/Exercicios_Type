/**
 * Exercício 11 – Dia da semana
 * Mostre se o dia é útil (1–5) ou final de semana (6–7).
 */

let dia: number = 1; // 1=Segunda ... 7=Domingo

if (dia >= 1 && dia <= 5) {//Verifica qual dia é
  console.log("Dia útil.");
} else if (dia === 6 || dia === 7) {
  console.log("Final de semana.");
} else {
  console.log("Número inválido para dia.");
}