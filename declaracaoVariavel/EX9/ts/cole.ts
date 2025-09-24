// 9) Genéricos em coleções (Map/Set com tipos)
const tabelaPrecos = new Map<string, number>(); // chave string, valor número
tabelaPrecos.set('carro', 12.5).set('moto', 8.0).set('caminhao', 20);
console.log('9) Map genérico:', Array.from(tabelaPrecos.entries()));