// LAÇOS CONDICIONAIS

// o Node não lê dados do usuário, por isso foi criado uma biblioteca

// necessário instalar o npm no terminal= "npm install readline-sync"

const numeroSorteado = 10

const imput = require("readline-sync") //importando a biblioteca

/* a função imput sempre lê como texto, necessário
 converter através da função Number*/

let numero = Number ( imput.question("Insira o token:")) /* para solicitar
dados do usuário no terminal*/

while (numero !== numeroSorteado) {
    console.log("Você errou, tente novamente")
    numero = Number ( imput.question("Insira o token:"))
}

console.log("Você acertou!") //colocar um console.log depois do while





