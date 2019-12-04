var indexList = 1;

function addListItem(){
    var ol = document.createElement('ol');

    var li = document.createElement('li');

    ol.appendChild(li);

    document.body.appendChild(ol);

    console.log(indexList);

    indexList++;
}




