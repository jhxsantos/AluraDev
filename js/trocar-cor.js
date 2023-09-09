const botaoCor = document.querySelector(".color-picker");
const moldura = document.querySelector(".moldura__codigo");

let cor = botaoCor.value;
moldura.style.backgroundColor = cor;

botaoCor.addEventListener("input", () => {

    cor = botaoCor.value;
    moldura.style.backgroundColor = cor;
})