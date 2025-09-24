// 10) 'as const' + typeof + indexed access
const cores = ['vermelho', 'azul'] as const; // array imutável
type Cor = typeof cores[number]; // só pode ser 'vermelho' ou 'azul'
const minhaCor: Cor = 'azul';
console.log('10) as const:', { cores: [...cores], minhaCor });