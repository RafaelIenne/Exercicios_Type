// 12) Funções tipadas
function soma(a: number, b: number): number { return a + b; } // função normal
const somar: (x: number, y: number) => number = (x, y) => x + y; // função em variável
console.log('12) Funções:', soma(2, 3), somar(5, 7));