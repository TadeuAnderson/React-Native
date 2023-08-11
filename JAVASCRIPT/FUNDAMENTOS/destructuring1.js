//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// Tire de dentro do objeto o atributo nome e idade 
//do objeto pessoa
const {nome, idade} = pessoa

console.log(nome, idade)

//atribuindo novos variáveis as já existentes
const {nome: n, idade: i } = pessoa
console.log(n, i)

//tentando pegar valores que não estão no objeto pessoa
// o retorno vai ser true caso esse atributo não exista no objeto
//por padrão ele retornará undefined
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//pegar os atributos de dentro de endereço
//cep retornará undefined
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)


