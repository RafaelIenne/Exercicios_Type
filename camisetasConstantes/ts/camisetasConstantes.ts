// Declara a constante "camiseta" com o preço constante de 80 reais
const camiseta1: number = 100;

// Declara a constante "desconto" com o valor constante de 20% (0.20)
const desconto1: number = 0.20;

// Calcula o valor do desconto
const valorDesconto1: number = camiseta1 * desconto1;

// Calcula o preço final após o desconto
const precoFinal1: number = camiseta1 - valorDesconto1;

// Exibe o preço final no console
console.log("Preço Constante: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);