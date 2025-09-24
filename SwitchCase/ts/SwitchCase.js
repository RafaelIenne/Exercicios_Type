// Exemplo de código do professor Eduardo Popovici
// Aula de lógica de programação com type 
// Declaração de uma variável chamada "mes" do tipo number e atribuição do valor 4.
var mes = 8;
// Estrutura switch para verificar o valor da variável "mes" e exibir o nome correspondente do mês.
// Verificação de igualdade
switch (mes) {
    case 1: // "case" verifica se a variável "mes" tem o valor especificado e executa o bloco correspondente.
        console.log("Janeiro"); // "console.log" exibe a mensagem no console do navegador ou terminal.
        break; // Interrompe a execução para evitar a execução de outros casos - se não colocar o break ele segue executando todos os itens, ou seja, exibe tudo direto.
    case 2:
        console.log("Fevereiro"); // Se "mes" for 2, imprime "Abril" no console.
        break;
    case 3:
        console.log("Março"); // Se "mes" for 3, imprime "Abril" no console.
        break;
    case 4:
        console.log("Abril"); // Se "mes" for 4, imprime "Abril" no console.
        break;
    case 5:
        console.log("Maio"); // Se "mes" for 5, imprime "Abril" no console.
        break;
    case 6:
        console.log("Junho"); // Se "mes" for 6, imprime "Abril" no console.
        break;
    case 7:
        console.log("Julho"); // Se "mes" for 7, imprime "Abril" no console.
        break;
    case 8:
        console.log("Agosto"); // Se "mes" for 8, imprime "Abril" no console.
        break;
    case 9:
        console.log("Setembro"); // Se "mes" for 9, imprime "Abril" no console.
        break;
    case 10:
        console.log("Outubro"); // Se "mes" for 10, imprime "Abril" no console.
        break;
    case 11:
        console.log("Novembro"); // Se "mes" for 11, imprime "Abril" no console.
        break;
    case 12:
        console.log("Dezembro"); // Se "mes" for 12, imprime "Abril" no console.
        break;
    default: // "default" é executado quando nenhum dos "case" anteriores corresponde ao valor da variável.
        console.log("Mês inválido"); // Se "mes" não estiver entre 1 e 12, exibe "Mês inválido".
}
