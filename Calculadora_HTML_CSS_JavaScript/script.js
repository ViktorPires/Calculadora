const result = document.querySelector('.resultado');
const confirmar = document.querySelector('.Igual')

function insert(valor){
    calculo.innerHTML += valor;
}

function backspace(){
    if (calculo.innerHTML){
        let resposta = document.getElementById('calculo').innerHTML
        calculo.innerHTML = resposta.substring(0, resposta.length -1);
    }
}

function clean(){
    calculo.innerHTML = ' ';
}

function confirma(){
    if (calculo.innerHTML != 'Error'){
        document.getElementById('calculo').innerHTML = eval(calculo.innerHTML)
    }
}