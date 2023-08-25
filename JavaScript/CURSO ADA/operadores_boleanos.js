// OPERADORES BOLEANOS

// IGUALDADE:           == (OU ===)
//DESIGUALDADE:         != (OU !==)
// MAIOR QUE:               >
// MAIOR OU IGUAL:          >=
// MENOR QUE:               <
// MENOR OU IGUAL:          <=

const numero = 10
console.log(numero == 20)
console.log(numero != 20)
console.log(numero > 20)
console.log(numero >= 20)
console.log(numero < 20)
console.log(numero <= 20)
console.log(numero === "10") // usar === para comparar tipo e conteúdo (por garantia sempre usar o ===)
console.log(numero == "10") // usar == para comparar só o conteúdo
console.log(numero !== "10") // sempre usar o !==, por garantia, pra evitar erros

console.clear()


// - CONJUNÇÕES LÓGICAS

// AND => && 

let idade = 26
let tenhoCNH = true
const possoDirigir = idade >= 18 && tenhoCNH === true

console.log("Posso dirigir?", possoDirigir)

console.clear()

// OR => ||

idade = 40
const votoFacultativo =idade < 18 || idade >= 70

console.log("Devo votar?", votoFacultativo)

// NOT => |

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso) // A exclamação inverte o resultado do boleano


