// aqui estou usando o destructuring
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))

//aqui poderia ser passado o obejto como no exemplo assima
//console.log (rand({max: 50, min: 40}))

// outra formar seria passando apenas um dos valores
//exemplo o mínino
console.log(rand({min: 955}))

//poderia também passar um objeto vazio
console.log(rand({}))

//caso tente passar um comando sem o objeto irar dar erro
//console.log(rand())