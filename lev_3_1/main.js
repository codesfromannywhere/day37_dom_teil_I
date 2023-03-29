// console.log("läuft");

let count = 0
const demo = document.querySelector('#demo')
const button = document.querySelectorAll('button');
// console.log(button);

const changeBackground = (color) => {
    count++
    demo.textContent = `Wir haben die Farbe ${count} mal geändert.`
    document.body.style.backgroundColor = color
};

changeHandle = () => {
    count++
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    demo.textContent = `rgb (${red}, ${green}, ${blue}) = #${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
