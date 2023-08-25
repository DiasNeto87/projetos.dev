//INFORMAÇÕES

let salario1 = 6000
let aluguel1 = -600
let contaDeLuz1 = -150
let contaDeAgua1 = -100
let internet1 = -100
let supermercado1 = -1500
let assinaturas1 = -100

let janeiro = salario1+aluguel1+contaDeLuz1+contaDeAgua1+internet1+supermercado1+assinaturas1

console.log("O saldo é", janeiro)
if (janeiro < 0) {
    console.log("Prejuízo")
} else {
    console.log("lucro")
}
