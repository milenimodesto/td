//função declarativa
function apresentacao(nome){
    return `meu nome é ${nome}`
}
// arrow function - arrow (flecha em português)
const apresentarArrow = nome => `meu nome é ${nome}`  // não tem parênteses, não tem chaves e não tem o return
//expressão de função 
const soma = function(valor1, valor2){ 
    return valor1 + valor2
}
// arrow function - arrow (flecha em português) - usa-se com const e sempre anônima
const soma2 = (valor3, valor4) => valor3 + valor4 //aqui como tem 2 parâmetros preciso dos parênteses
// arrow function com mais de 1 linha de instrução
const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 10){
        return("Somente números de 1 a 10");
    }else{
        return numero1 + numero2;
    }
}

