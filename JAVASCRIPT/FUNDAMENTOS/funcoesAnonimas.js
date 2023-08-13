/*Essa função vai ser chamada quando não tiver uma operação*/
const soma = function (x, y){
    return x + y
}

/*Quando for imprimir como não foi passado uma operação
esse a e b vão se torna x e y e fazer a operação soma por padrão*/
const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
//nesse função é feito uma função anônima dentro do imprimir 
imprimirResultado(3,4, function(x,y){
    return x - y
})
//nessa função também é criado uma função anonima de multiplicar
imprimirResultado(3,4, (x,y) => x * y)