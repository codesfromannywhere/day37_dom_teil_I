console.log("läuft");

const bttn = document.getElementById('clickMe')

let clicks = 0;

counts = () => {
    clicks++; 
    bttn.innerHTML = `${"Click me: "}`.concat(clicks)
}

