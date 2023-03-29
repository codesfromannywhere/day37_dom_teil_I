console.log("läuft");

const selection = document.getElementById('my-select');
const selectionResult = document.getElementById('option-selected');

selection.addEventListener("change", (event) => {
        selectionResult.textContent = `Sie haben ausgewählt ${event.target.value}`;
})
