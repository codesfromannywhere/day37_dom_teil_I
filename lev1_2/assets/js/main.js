console.log("läuft");

let pElements = document.getElementsByClassName('example')

function myFunction() {
    for (let i = 0; i < pElements.length; i++){
        pElements[i].style.backgroundColor = "black";
        pElements[i].style.color = "white";
    }
}

