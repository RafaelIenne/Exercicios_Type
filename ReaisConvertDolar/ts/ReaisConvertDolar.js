// Função que converte o preço em dólares para reais, incluindo o IOF | necessita saber o preço em dolar e a taxa de cambio e retorna o preço em reais, o valor do IOF e o valor com o IOF
function converterPrecoParaReais(precoEmDolar, taxaDeCambio, iof) {
    if (iof === void 0) { iof = 6.38; }
    var precoEmReais = precoEmDolar * taxaDeCambio;
    var valorIOF = precoEmReais * (iof / 100); // Calcula o valor do IOF
    var precoComIOF = precoEmReais + valorIOF; // Aplica o IOF
    return { precoEmReais: precoEmReais, valorIOF: valorIOF, precoComIOF: precoComIOF };
}
// Exemplo de dados dos produtos (preços em dólares)
var produtos = [
    { nome: "Mouse", precoEmDolar: 20 },
    { nome: "Teclado", precoEmDolar: 35 },
    { nome: "Monitor", precoEmDolar: 210 },
    { nome: "HD Externo", precoEmDolar: 150 },
    { nome: "SSD", precoEmDolar: 200 },
    { nome: "Placa de Vídeo", precoEmDolar: 490 },
    { nome: "Processador", precoEmDolar: 320 },
    { nome: "Memória RAM", precoEmDolar: 65 },
    { nome: "Fonte", precoEmDolar: 100 },
    { nome: "Gabinete", precoEmDolar: 65 },
];
// Exemplo de taxa de câmbio (1 USD = 5.10 BRL)
var taxaDeCambio = 5.10;
// Puxa as informações de "produtos" e faz a conversão para reais
produtos.forEach(function (produto) {
    var _a = converterPrecoParaReais(produto.precoEmDolar, taxaDeCambio), precoEmReais = _a.precoEmReais, valorIOF = _a.valorIOF, precoComIOF = _a.precoComIOF; //dano as informações para converterPrecoReais e converte
    console.log("Produto: ".concat(produto.nome));
    console.log("Pre\u00E7o em D\u00F3lares: $".concat(produto.precoEmDolar.toFixed(2)));
    console.log("Pre\u00E7o em Reais (sem IOF): R$ ".concat(precoEmReais.toFixed(2)));
    console.log("Valor do IOF: R$ ".concat(valorIOF.toFixed(2)));
    console.log("Pre\u00E7o final com IOF: R$ ".concat(precoComIOF.toFixed(2), "\n"));
});
