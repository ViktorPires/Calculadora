
const express = require('express')
const app = express()
const port = 3000
const funcoes = require('./funcoes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req,res) => {
  const numero1 = parseFloat(req.body.numero1)
  const numero2 = parseFloat(req.body.numero2)
  const operador = req.body.operador

  if(isNaN(numero1) && isNaN(numero2)){
    res.send(`Operação Inválida!!! O "numero1" e "numero2" não são números ou estão digitados incorretamente!!! Para realizar uma operação válida, siga o exemplo: "numero1": 12, "numero2": 12, "operador": "+"`);
} else if(isNaN(numero1)){
    res.send(`Operação Inválida!!! O "numero1" não é um número ou está digitado incorretamente!!! Para realizar uma operação válida, siga o exemplo: "numero1": 12, "numero2": 12, "operador": "+"`);
} else if(isNaN(numero2)){
    res.send(`Operação Inválida!!! O "numero2" não é um número ou está digitado incorretamente!!! Para realizar uma operação válida, siga o exemplo: "numero1": 12, "numero2": 12, "operador": "+"`);
} else{
    const resultado = funcoes.calculadora(operador, numero1, numero2)
    const impressao = funcoes.impressao(operador, numero1, numero2, resultado)
    res.send(impressao)
}
});

app.get('/', (req, res) => {
  res.send('Calculadora Node - Para utilizar digite o operador (/somar, /subtrair, /multiplicar, /dividir, /resto ou /potencia) no navegador acompanhado do número (ex: /somar?num1=2&num2=2)')
})

app.get('/:operador', (req, res) => {
  const operador = req.params.operador
  const num1 = parseFloat(req.query.num1)
  const num2 = parseFloat(req.query.num2)

  if(isNaN(num1) && isNaN(num2)){
    res.send(`Operação Inválida!!! O "num1" e "num2" não são números ou estão digitados incorretamente!!! Para realizar uma operação válida, siga o exemplo: http://localhost:3000/operador?num1=2&num2=4`)
  } else if(isNaN(num1)){
    res.send(`Operação Inválida!!! O "num1" não é um número ou está digitado incorretamente!!! Para realizar uma operação válida, siga o exemplo: http://localhost:3000/operador?num1=2&num2=4`)    
  } else if(isNaN(num2)){
    res.send(`Operação Inválida!!! O "num2" não é um número ou está digitado incorretamente!!! Para realizar uma operação válida, siga o exemplo: http://localhost:3000/operador?num1=2&num2=4`) 
  } else{
    const resultado = funcoes.calculadora(operador, num1, num2)
    const impressao = funcoes.impressao(operador, num1, num2, resultado)
    res.send(impressao)
    console.log(impressao)
}
})

app.listen(port, () => {
  console.log('Servidor Online - Porta 3000')
})