// Você pode apresentar o resultado tanto no console quanto em um alerta no navegador.
// 1° Crie" um script que exiba a mensagem "Hello World" em um alerta no navegador
 let message = "Hello World";
 alert(message);
 console.log(message);

// 2° Crie um script que declare duas váriaveis e exiba o resultado da soma entre elas:
let number1 = Number(prompt("Digite o primeiro número: "));
let number2 = Number(prompt("Digite o segundo número: "));

let result = number1 + number2;
alert(result);
console.log(result);

// 3° Crie um scrip que declare uma variavel e verifique se o valor é um numero, se for, exiba se é numero ou não
let isNumber = 20;
let verifica = typeof(isNumber);

let resultado = verifica === "number" ? "é numero" : "não é numero";
console.log(resultado)

// 4° Crie um script que declare uma variavel e verifique se o valor é uma string, se for exiba se é uma string ou não
let isString = "felipe";
let verify2 = typeof(isString);

let result2 = verify2 === "string" ? "é string" : "não é string"
console.log(result2);

// 5° Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let valueFirst = true;
let verifi = typeof(valueFirst);
console.log(verifi);

let resul = verifi === "boolean" ? "é boleano" : 'não é boleano';
console.log(resul); 

// solucionando o desafio da questão 6 7 8 de subtração, multiplicação e divisão
let option;

function calculator(number1, number2){
    while(option != 4) {
        option = Number(prompt(`Digite um dos números a seguir para realizar as operações:
    
    1. Para subtrair os valores;
    2. Para multiplicar;
    3. Para dividir;
    4. Para sair`))

    switch(option){
        case 1:
            number1 = Number(prompt("Digite o primeiro numero para subtração: "));
            number2 = Number(prompt("Digite o segundo número para subtração: "));

            let result = number1 - number2;
            alert(`A subtração dos números é ${result}`);
        break;

        case 2: 

        number1 = Number(prompt("Digite o primeiro numero para multiplicação: "));

        number2 = Number(prompt("Digite o segundo número para multiplicação: "));
        let multi = number1 * number2;
         alert(`O valor da multiplicação é ${multi}`);
        break;

        case 3: 
        number1 = Number(prompt("Digite o primeiro numero para divisão: "));

        number2 = Number(prompt("Digite o segundo número para divisão: "));
        let division = number1 / number2 
        alert(`O resultado da divisão é ${division.toFixed(2)}`);
        break;

        case 4: 
         alert("Tchau");
        break;

        default:
            alert("opção invalida");
    };
    };
};

calculator();

// 9 Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par"
let isPar = Number(prompt("Digite para verificar se um número é par ou impar"));

let verify = isPar % 2 == 0 ? "É par" : "Não é par";
console.log(verify);

// Crie um script que receba um número e diga se ele é impar ou não:
let isImpar = 3;
let verification = isImpar % 2 != 0 ? "É impar" : 'Não é impar';

console.log(verification);