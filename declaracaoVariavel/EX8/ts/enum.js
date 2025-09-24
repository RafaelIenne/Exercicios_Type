// 8) Enum (conjunto nomeado)
var TipoVeiculo;
(function (TipoVeiculo) {
    TipoVeiculo["Carro"] = "carro";
    TipoVeiculo["Moto"] = "moto";
    TipoVeiculo["Caminhao"] = "caminhao";
})(TipoVeiculo || (TipoVeiculo = {}));
var tipo = TipoVeiculo.Carro; // valor do enum
console.log('8) Enum:', tipo);
