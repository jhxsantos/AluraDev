export function c_apicaHighlight(areaCodigo, linguagem) {

    const codigo = areaCodigo.querySelector("code").innerText;

    areaCodigo.innerHTML = `<code class="hljs ${linguagem.toLowerCase()} codigo__codigo" 
                             aria-label="Texto de código"></code>`;
   
    areaCodigo.querySelector("code").textContent = codigo;

    hljs.highlightElement(areaCodigo.querySelector("code"));
}
