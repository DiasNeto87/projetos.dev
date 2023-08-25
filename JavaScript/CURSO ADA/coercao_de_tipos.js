// COERÇÃO/CONVERSÃO DE TIPOS

// 1. COERÇÃO EXPLÍCITA (MANUAL)

const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero) // NUMÉRO PARA TEXTO

console.log(numeroEmFormatoDeString, typeof	numeroEmFormatoDeString)
console.log(Number("12345")) //CONVERTER TEXTO PARA NÚMERO
console.log(parseFloat("12345.23")) // FORMA ALTERNATIVA DE CONVERSÃO, PREFERÍVEL USAR O NUMBER
console.log(parseInt("12345.23")) // RETIRA AS CASAS DECIMAIS, ARREDONDA O NUMERO
console.log(Boolean(1)) // DIFERENTE DE ZERO É TRUE, 0 É FALSE

// 2. COERÇÃO IMPLÍCITA (AUTOMÁTICA)

console.log(10+"1") // QUANDO SOMA NÚMERO COM TEXTO COM NUMERO, O JS TRANSFORMA (CONCATENA) TUDO EM TEXTO
console.log(10-"1") // EM CASO DE SUBTRAÇÃO O JS ENTENDE QUE É NUMERO
console.log(10*"2") // EM CASO DE MULTIPLICAÇÃO O JS ENTENDE QUE É NUMERO
console.log(10/"2") // EM CASO DE DIVISÃO O JS ENTENDE QUE É NUMERO
console.log(10-"ABCD") // NESSE TIPO DE CASO, APARECE A MSG NaN = NOT A NUMBER

// QUAL SERÁ A SAÍDA DESSE CÓDIGO?

let n = 1+ "1"

n = n-1

console.log(n)

// QUAL SERÁ A SAÍDA DESSE CÓDIGO?

console.log(2+3+4+"5") // observar a sequência dos numros ou textos, para chegar ao resultado

// QUAL SERÁ A SAÍDA DESSE CÓDIGO?

console.log("5"+2+3+4)

// QUAL SERÁ A SAÍDA DESSE CÓDIGO?

console.log("10"-"4"-"3"-2+"5")

