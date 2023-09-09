const btnSalvar = document.querySelector(".botao--limpar-campos");

btnSalvar.addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector(".formulario").reset();
    document.querySelector(".moldura__codigo").style.backgroundColor = document.querySelector(".color-picker").value;
    document.querySelector(".codigo__codigo").textContent = "";        
    document.querySelector(".codigo__codigo").focus();
});