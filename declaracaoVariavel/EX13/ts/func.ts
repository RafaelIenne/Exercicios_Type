// 13) Função genérica
function identidade<T>(valor: T): T { return valor; } // retorna o mesmo tipo
console.log('13) Genérica:', identidade<string>('ok'), identidade<number>(99));