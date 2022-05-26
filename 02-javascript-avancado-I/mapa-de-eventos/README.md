# MAPA DE EVENTOS

## Manipuladores de Evento;
Existe três tipos de eventos:
    <ul>
        <li></li>
    </ul>

Tipos de manipuladores:
    <ul>
        <li>Manipuladores in-line</li>
            < button type="button" onclick="alert('Você clicou!')">Click aqui</>
        <li>Propriedades dos elementos</li>
            button.onclick = () => { window.alert("Você clicou o botão! Manipulador da propriedade do elemento")}
        <li>Métodos do DOM: addEventListener() e removeEventListener()</li>
            button.addEventListener('click', alerta)
    </ul>


## Arquitetura do Evento 
<p>Fases do evento</p>
 <ul>
    <li>Capturing</li>
    <li>Target</li>
    <li>Bubbling</li>
 </ul>


## Interface Event