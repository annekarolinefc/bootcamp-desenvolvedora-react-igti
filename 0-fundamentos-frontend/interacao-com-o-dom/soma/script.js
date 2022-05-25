//pegando os elementos
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r = document.getElementById('r')
console.log(n1)
console.log(n2)

//lendo os valores
n1.valueAsNumber;
n2.valueAsNumber;

function calcula(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber
    if(isNaN(resultado)){
        r.textContent = ''
    } else{
        r.textContent = resultado
    }    
}

document.addEventListener('input', soma)
