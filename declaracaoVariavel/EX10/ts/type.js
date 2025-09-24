var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 10) 'as const' + typeof + indexed access
var cores = ['vermelho', 'azul']; // array imutável
var minhaCor = 'azul';
console.log('10) as const:', { cores: __spreadArray([], cores, true), minhaCor: minhaCor });
