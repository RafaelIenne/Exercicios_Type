// Função que converte o preço em dólares para reais, incluindo o IOF | necessita saber o preço em dolar e a taxa de cambio e retorna o preço em reais, o valor do IOF e o valor com o IOF
function converterPrecoParaReais(precoEmDolar: number, taxaDeCambio: number, iof: number = 6.38): { precoEmReais: number, valorIOF: number, precoComIOF: number } {
    const precoEmReais = precoEmDolar * taxaDeCambio;
    const valorIOF = precoEmReais * (iof / 100); // Calcula o valor do IOF
    const precoComIOF = precoEmReais + valorIOF; // Aplica o IOF
    return { precoEmReais, valorIOF, precoComIOF };
}

// Exemplo de dados dos produtos (preços em dólares)
const produtos = [ // colocado em um array []
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
const taxaDeCambio = 5.10;

// Puxa as informações de "produtos" e faz a conversão para reais
produtos.forEach(produto => { // forEach funciona --> nomeDaVariavel.forEach(variavel que armazena as informações{oq quer mostratr})
    const { precoEmReais, valorIOF, precoComIOF } = converterPrecoParaReais(produto.precoEmDolar, taxaDeCambio); //dano as informações para converterPrecoReais e converte
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço em Dólares: $${produto.precoEmDolar.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF.toFixed(2)}\n`);
});