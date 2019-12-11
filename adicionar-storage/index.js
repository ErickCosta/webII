var values = JSON.parse(localStorage.getItem('values'));

if (!values){
    values = [];
}

function renderValues(){
    console.log("Entrou");
    console.log(values);
    for(value in values) {
        console.log(value);
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
            li.innerHTML = values[value];
            ul.appendChild(li);
    }
}

function getInf(){
    console.log("Pegando dados!");

    var iNome = document.getElementById("nome");
    var iValor = document.getElementById("valor");
    var ul = document.getElementById("ul");

    if(iNome.value && iValor.value){
        var li = document.createElement("li");
        li.innerHTML = `Nome: ${iNome.value} - Valor: ${iValor.value}`;
        ul.appendChild(li);
        values.push(li.innerHTML);
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

renderValues();