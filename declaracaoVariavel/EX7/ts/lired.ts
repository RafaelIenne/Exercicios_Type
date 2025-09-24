// 7) Literais e readonly
type StatusTicket = 'ABERTO' | 'FECHADO'; // só aceita esses valores
const statusTicket: StatusTicket = 'ABERTO';
const PI = 3.14159 as const; // constante imutável
const config = { tema: 'dark', versao: 1 } as const; // objeto imutável
console.log('7) Literais/readonly:', { statusTicket, PI, config });