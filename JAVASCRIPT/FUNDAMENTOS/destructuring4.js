function rand([min = 0 , max = 1000]){
    //verificação se o min é menor que o max
    //o 1º if ele vai inverter caso o min seja maior
            //destructuring      criando um array
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//no caso o min é maior
console.log (rand([50, 40]))

//passando apenas o mínino
console.log(rand([992]))

//passando apenas o segundo
console.log(rand([ , 10]))

//valores vazios e com isso ele assume os padrões
console.log(rand([]))