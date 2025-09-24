// 11) Interface com opcional e readonly
interface Usuario {
  readonly id: string; // não pode ser alterado
  nome: string;
  email?: string; // opcional
}
const u: Usuario = { id: 'u1', nome: 'Ana' };
// u.id = 'u2'; // ERRO se tentar mudar
console.log('11) Interface:', u);