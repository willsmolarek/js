//parametros de função

function soma(num1, num2){
    return num1 + num2;
}

//console.log(soma(2, 2))

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade('william', 18))

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))