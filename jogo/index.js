function cliqueiVerificar(){
    console.log(sequencia.toString());
    console.log(tentativas.toString());
    if(sequencia.toString() == tentativas.toString()){
        console.log("Ganhou");
    }else{
        console.log("Perdeu");
    }
}

function cliqueiRed(){
    console.log("Red");
    tentativas.push(0);
}

function cliqueiGreen(){
    console.log("Green");
    tentativas.push(1);
}

function cliqueiYellow(){
    console.log("Yellow");
    tentativas.push(2);
}

function despintar(){
    luzinha.style.backgroundColor = 'white';
}

function pintarLuzinha(){
    console.log("Entrou");
    console.log(luzes[sequencia[count]]);
    luzinha.style.backgroundColor = luzes[sequencia[count]];
    setTimeout(despintar, 1000);
    if(count == 2){
        clearInterval(interval);
    }else{
        count = count + 1;
    }
}

var count = 0;
var luzes = ['red', 'green', 'yellow']
var sequencia = [];
var tentativas = []

var luzinha = document.getElementById('luzinha');

for (var i = 0; i <= 2; i++){
    sequencia.push(Math.floor(Math.random() * (3)));
}

console.log("Cores sorteadas");
console.log(sequencia);

var interval = setInterval(pintarLuzinha, 3000);


