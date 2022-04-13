const res = require("express/lib/response");

function calculadora (operacao, a, b) {
    switch (operacao){
        case "somar": case "+":
            return a + b;
            break;
        case "subtrair": case "-":
            return a - b;
            break;
        case "multiplicar": case "X":
            return a * b;
            break;
        case "dividir": case "/":
            return a / b;
            break;
        case "resto": case "%":
            return a % b;
            break;
        case "potencia": case "^":
            return a ** b
            break;
    }
    
}

function impressao(operacao, a, b, resultadoFinal){
    switch (operacao){
        case "somar": case "+":
            return `O resultado da soma de ${a} + ${b} é: ${resultadoFinal}`
            break;
        case "subtrair": case "-":
            return `O resultado da subtração de ${a} - ${b} é: ${resultadoFinal}`
            break;
        case "multiplicar": case "X":
            return `O resultado da multiplicação de ${a} X ${b} é: ${resultadoFinal}`
            break
        case "dividir": case "/":
            return `O resultado da divisão de ${a} / ${b} é: ${resultadoFinal}`
            break;
        case "resto": case "%":
            return `O resto de ${a} % ${b} é: ${resultadoFinal}`
            break;
        case "potencia": case "^":
            return `O resultado da potência de ${a} ^ ${b} é: ${resultadoFinal}`
            break;
        default:
            return `Operação Inválida!!! \n
                    Exemplo de operação válida GET: http://localhost:3000/operador?num1=2&num2=2 onde "operador" deve ser substituído por /somar, /subtrair, /multiplicar, /dividir, /resto ou /potencia \n
                    Exemplo de operação válida POST: Key - Operador: "+", "-", "X", "/", "^", "%"`
            break;
    }
}

module.exports = {
    calculadora,
    impressao,
};