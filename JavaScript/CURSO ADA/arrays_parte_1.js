// ARRAYS

// COMO CRIAR UM ARRAY?

let arr = ["Antonio", 35, 1.71, true]

console.log(arr)

// COMO ACESSAR OS ELEMENTO DOS ARRAYS?

console.log("Elemento 01", arr[0]) 
console.log("Elemento 02", arr[1])
console.log("Elemento 03", arr[2])
console.log("Elemento 04", arr[3])

// sempre lembrar que o índice começa pelo 0 e não pelo 1

// COMO OBTER O TAMANHO DO ARRAY?

console.log("Tamanho do array", arr.length) 

console.clear()


// no caso, tamanho 4, quatro índices

// PERCORRENDO ARRAYS

// ***a primeira forma de percorrer um array***

for(let i = 0; i <Array.length;i++) {
    console.log(arr[i])
}
console.clear()

// esse i++ significa que o array vai de um em um
// usar o array.length deixa mais dinâmico e permite alterar o array

// ***a segunda forma de percorrer um array***

for(let elemento of arr) {
    console.log(elemento)
}
console.clear()

// ***a terceira forma de percorrer um array***

for(let índice in arr) {
    console.log(índice, arr[índice], typeof arr[índice])
}

// essa terceira forma percorer os índices de um array