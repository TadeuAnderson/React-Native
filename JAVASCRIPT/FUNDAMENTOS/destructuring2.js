const [a] = [10]
console.log(a)

//podemos fazer declaração pulando índices
const [n1, , n3, ,n5,n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

//não é recomendado fazer esse tipo de exemplo
//só para mostrar que funciona
//arrey dentro dele o 1º elemento é vazio
//depois o segundo elemento é um array dentro do array
//no segundo array o 1º elemento é vazio
const [ , [ , nota]] = [[,8,8],[9,6,8]]
console.log(nota)