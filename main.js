let inputElement = document.getElementById('ipt');
let buttonElement = document.getElementById('btn');
let listElement = document.getElementById('ul');


function addItem() {
    let getText = inputElement.value;
    let textItem = document.createTextNode(getText);
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');

    listElement.appendChild(liElement);
    liElement.appendChild(textItem);
}

buttonElement.onclick = function() {
    addItem();
    inputElement.value = '';
}