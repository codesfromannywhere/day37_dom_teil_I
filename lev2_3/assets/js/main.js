console.log("läuft");

const aTags = document.getElementsByTagName('a')

const changeColor = () => {
for (let i = 0; i < aTags.length; i++) {
    aTags[0].style.backgroundColor = "#f6c89f";
    aTags[1].style.backgroundColor = "#ffe7d1";
    aTags[2].style.backgroundColor = "#4b8e8d";
    aTags[3].style.backgroundColor = "#396362";
}
}