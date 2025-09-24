// Declara ujma variável do tipo number chamada "camiseta" com o preço original de 50 reais
let camiseta: number = 50;

// Declara uma variável do tipo number chamada "desconto" com o valor de 50% (0.50)
let desconto: number = 0.50;

// Declara a variavel "valorDesconto" que calcula o valor do desconto
let valorDesconto: number = camiseta * desconto;

// Declara a variavel "precoFinal" que calcula o preço final após o desconto
let precoFinal: number = camiseta - valorDesconto;

// Exibe o preço final no console
console.log("Preço original: R$", camiseta);
console.log("Desconto: R$", valorDesconto);
console.log("Preço final com desconto: R$", precoFinal);