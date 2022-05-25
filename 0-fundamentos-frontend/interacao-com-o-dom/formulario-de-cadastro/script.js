var fsList = document.querySelectorAll('.multiple-field')

for (i=0; i<fsList.length; i++){
    initMultipleFieldset(fsList[i])
}
function initMultipleFieldset(fs){
    var addButton = document.createElement("button")
    addButton.textContent = 'Adicionar';
    addButton.type="button"
    fs.appendChild(addButton);

    addButton.addEventListener("click", function(){
        var newInput = document.createElement("input")
        fs.appendChild(newInput)
    })
}