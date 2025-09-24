// 14) Type narrowing (refinamento por checagem de tipo)
function formatarId(val: number | string): string {
  if (typeof val === 'number') return val.toString().padStart(3, '0'); // se número
  return val.toUpperCase(); // se texto
}
console.log('14) Narrowing:', formatarId(7), formatarId('abc'));