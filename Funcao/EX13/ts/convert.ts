/**
 * Exercício 13 – Conversão Celsius → Fahrenheit
 * F = C * 1.8 + 32
 */

function celsiusParaFahrenheit(c: number): number { //recebe um numero em celcius e converte para fahrenheit
  return c * 1.8 + 32;
}

console.log(`15°C = ${celsiusParaFahrenheit(15)}°F`);