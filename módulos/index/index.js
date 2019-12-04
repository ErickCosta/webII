var indexList = 1;

function addListItem(){
    var ol = document.createElement('ol');

    var li = document.createElement('li');

    var nome = document.getElementById('nome');

    var email = document.getElementById('email');

    console.log(nome.value);
    console.log(email.value);

    li.textContent = `Nome: ${nome.value} Sobrenome: ${email.value}`;

    ol.appendChild(li);

    document.body.appendChild(ol);

    console.log(indexList);

    nome.value = "";

    email.value = "";

    indexList++;
}




