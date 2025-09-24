/**
 * Exercício 13 – Temperatura
 * Frio (<15), Agradável (15–25), Quente (>25).
 */
var temperatura = 5; //le a temperatura
if (temperatura < 15) { //exibe uma mensagem baseado na temperatura
    console.log("Está frio.");
}
else if (temperatura <= 25) {
    console.log("Clima agradável.");
}
else {
    console.log("Está quente.");
}
