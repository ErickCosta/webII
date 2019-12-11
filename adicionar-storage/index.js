var values = []
var ul = document.getElementById("ul");

function renderValues(){
    ul.innerHTML = "";
    values = JSON.parse(localStorage.getItem('values'));
    for(value in values) {
        var li = document.createElement("li");
        var button = document.createElement('button');
        var butttonText = document.createTextNode('Excluir');
        
        button.appendChild(butttonText);
        button.setAttribute('onclick', `remove(${values.indexOf(values[value])})`);

        li.innerHTML = values[value];
        li.appendChild(button);

        ul.appendChild(li);
    }
}

function getInf(){

    var iNome = document.getElementById("nome");
    var iValor = document.getElementById("valor");

    if(iNome.value && iValor.value){
        
        values.push(`Nome: ${iNome.value} - Valor: ${iValor.value}`);

        var button = document.createElement('button');
        var butttonText = document.createTextNode('Excluir');
        button.appendChild(butttonText);
        button.setAttribute('onclick', `remove(${values.indexOf(`Nome: ${iNome.value} - Valor: ${iValor.value}`)})`);
        
        var li = document.createElement("li");
        li.innerHTML = `Nome: ${iNome.value} - Valor: ${iValor.value}`;
        li.appendChild(button);
        ul.appendChild(li);

        localStorage.setItem("values", JSON.stringify(values));

        iNome.value = "";
        iValor.value = "";
    }else{

        if(!iNome.value && !iValor.value){
            alert("Falta o nome e o valor!");
        }else if(iNome.value == ""){
            alert("Falta o nome!");
        }else if (iValor.value == ""){
            alert("Falta valor!");
        }
    }
}

function remove(pos){
    console.log(pos);
    values.splice(pos, 1);
    localStorage.setItem("values", JSON.stringify(values));
    renderValues();
}

renderValues();