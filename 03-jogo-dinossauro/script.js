let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList!='animar'){
        personagem.classList.add(animar)
    }
    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

var testarColisao = setTimeout(function(){
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var quadrado = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('left')
    )

    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none';
        quadrado.style.display = 'none';
        alert('Você Perdeu!')
    }
}, 10)