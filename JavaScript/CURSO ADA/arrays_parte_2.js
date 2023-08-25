// ARRAYS PARTE 2 - MÉTODOS DE ARRAYS, FUNÇÕES DENTRO DE UMA VARIÁVEL

const arr1 = [30,12,45,34,29]
let arr2 = []

//FATIAMENTO: SLICE

console.log(arr1.slice(0, 3))
console.log(arr1.slice(3)) // se colocar só um parâmetro, ele vai até o final
console.clear()

//ADICIONANDO ELEMENTOS: PUSH | UNSHIFT

console.log("Antes de adicionar:", arr2)

arr2.push(10,20,30) 
arr2.push(40) //joga pro final
console.log("Depois de adicionar:", arr2)

console.log("Antes de adicionar com Unshift:", arr2)

arr2.unshift(0) // adiciona no começo

console.log("Depois de adicionar com Unshift:", arr2)

console.clear()

// REMOVENDO ELEMENTOS: POP | SHIFT

console.log("antes de remover com pop:", arr2)
const elementoRemovido = arr2.pop() // remove o ultimo
console.log("depois de remover com pop:", arr2)
console.log("O elemento removido foi:", elementoRemovido)

console.clear()

console.log("antes de remover com shift:", arr2)

arr2.shift() // remove o primeiro

console.log("depois de remover com shift:", arr2)

console.clear()

// CONCATENANDO ARRAYS: CONCAT

console.log(arr1)
console.log(arr2)

console.log(arr1.concat(arr2))

//a concatenação pode começar do array 2 tbm

console.clear()

//BUSCANDO ARRAYS: indexOf | LastIndexOf

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34) 
console.log(indiceDoElemento34)

// ***se o índice retornar -1, é pq o elemento nao existe***
// ***se tiver dois elementos iguais, ele retorna sempre o primeiro***

console.clear()

let arr3 = [1,2,3,3,5,3]

console.log(arr3.indexOf(3))
console.log(arr3.lastIndexOf(5))
console.clear()

// DESCOBRINDO A EXISTÊNCIA DE UM ELEMENTO: INCLUDES,

console.log(arr1)
console.log(arr1.includes(29)) 
console.clear()

//usado para procurar um elemento
//incluir o valor dentro do console
// se inclui, ele retorna "true", se nao, ele retorna "false"

// INVERTENDO UM ARRAYS: REVERSE

console.log("Arr1 normal", arr1)
let arr1Invertido = arr1.reverse()
console.log("Arr1 Invertido", arr1Invertido)



