console.log("läuft");
// addEventListener(“click”)
// event.preventDefault();
// .value
// oder .selectedIndex 
// 

// const changeIt = document.querySelector('#button')


const btn = document.querySelector('#button');
const colorSelection = document.querySelector('#farbeAuswahlen')

// VARIANTE I

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const index = colorSelection.selectedIndex
    console.log(index);
    switch (index) {
        case 0:
            document.body.style.backgroundColor = "MediumOrChid"
            break;
        case 1:
            document.body.style.backgroundColor = "MintCream"
            break;
        case 2:
            document.body.style.backgroundColor = "DodgerBlue"
            break;
        case 3:
            document.body.style.backgroundColor = "Goldenrod"
            break;
        case 5:
            document.body.style.backgroundColor = "Wheat"
            break;
        case 6:
            document.body.style.backgroundColor = "MediumTurquoise"
            break;
        case 7:
            document.body.style.backgroundColor = "Moccasin"
            break;
        case 8:
            document.body.style.backgroundColor = "FireBrick"
            break;
        case 9:
            document.body.style.backgroundColor = "LimeGreen"
            break;
        case 10:
            document.body.style.backgroundColor = "SlateGray"
            break;
    }
})

// VARIANTE II

// btn.addEventListener('click', (event) => {
//     event.preventDefault();
// document.body.style.backgroundColor = colorSelection.value.replace(" ","")
// })





// for (let i = 0; i < colorSelection.length; i++)
//     document.body.style.backgroundColor = colorSelection[i];