console.log("läuft");

const keyCodeOutput = document.getElementById('keyCodeOutput')
const keyCodeOutputBig = document.getElementById('keyCodeOutputH1')
const keyNumOutput = document.getElementById('keyNumOutput')
const codeOutput = document.getElementById('codeOutput')


// let keyCodeInfo = () => {
    document.body.addEventListener('keydown', (event) => {
        keyCodeOutputBig.textContent = event.keyCode
        keyCodeOutput.textContent = event.keyCode
        keyNumOutput.textContent = event.key
        codeOutput.textContent = event.code
    })
