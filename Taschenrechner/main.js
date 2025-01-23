function appendOperation(operation){
    document.getElementById("resultArea").innerHTML += operation;
};

function calculateResult(){
    let container = document.getElementById("resultArea");
    let result = eval(container.innerHTML);      //eval () - ausrechnen/evaluieren container Inhalt
    container.innerHTML = result;
};

function deleteLast(){
    let container = document.getElementById("resultArea");
    if(container.innerHTML.endsWith(' ')){
        container.innerHTML = container.innerHTML.slice(0, -3); //3Zeichen werden entfernt (-1)
    } else{
    container.innerHTML = container.innerHTML.slice(0, -1); //letztes Zeichen wird entfernt (-1)
    }
};