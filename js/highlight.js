const areaCodigo = document.querySelector(".codigo__texto");
const botao      = document.querySelector(".botao--visualizar");
const linguagem  = document.querySelector(".personalizacao__linguagem");

aplicaHighlight(areaCodigo, linguagem);

export function aplicaHighlight(areaCodigo, linguagem) {

    const codigo = areaCodigo.querySelector("code").innerText;

    areaCodigo.innerHTML = `<code class="hljs ${linguagem.value.toLowerCase()} codigo__codigo" 
                             contenteditable="true" aria-label="Editor de código"></code>`;

    areaCodigo.querySelector("code").textContent = codigo;
    hljs.highlightElement(areaCodigo.querySelector("code"));
}

botao.addEventListener("click", (event) => {
    event.preventDefault();

    aplicaHighlight(areaCodigo, linguagem);
});

// const areaCodigo = document.querySelector(".codigo__texto");
// const botao      = document.querySelector(".botao--visualizar");

// aplicaHighlight();

// export function aplicaHighlight() {

//     const linguagem  = document.querySelector(".personalizacao__linguagem");
//     const codigo = areaCodigo.querySelector("code").innerText;

//     areaCodigo.innerHTML = `<code class="hljs ${linguagem.value.toLowerCase()} codigo__codigo" 
//                              contenteditable="true" aria-label="Editor de código"></code>`;

//     areaCodigo.querySelector("code").textContent = codigo;
//     hljs.highlightElement(areaCodigo.querySelector("code"));
// }

// botao.addEventListener("click", (event) => {
//     event.preventDefault();

//     aplicaHighlight();
// });