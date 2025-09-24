// 5) Objeto com alias de tipo
type Veiculo = { placa: string; modelo: string; ano: number }; // tipo definido
const carro: Veiculo = { placa: 'AWS4548', modelo: 'Fox', ano: 2020 }; // objeto
console.log('5) Objeto + type:', carro);