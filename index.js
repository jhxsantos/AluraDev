import "./js/trocar-cor.js";
import "./js/salvar-projeto.js";
import "./js/highlight.js";
import "./js/busca.js";

import { aplicaHighlight } from "./js/highlight.js";

window.addEventListener("load", () => {
    const projetoRecebido = JSON.parse(sessionStorage.getItem("projetoClicado"));

    if (projetoRecebido) {
        document.querySelector(".codigo__codigo").textContent       = projetoRecebido.textoCodigoProjeto;
        document.querySelector(".projeto__nome").value              = projetoRecebido.nomeProjeto;
        document.querySelector(".projeto__descricao").value         = projetoRecebido.descricaoProjeto;
        document.querySelector(".personalizacao__linguagem").value  = projetoRecebido.linguagemProjeto;

        document.querySelector(".color-picker").value = projetoRecebido.corProjeto;
        document.querySelector(".moldura__codigo").style.backgroundColor = projetoRecebido.corProjeto;

        const areaCodigo = document.querySelector(".codigo__texto");
        const linguagem  = document.querySelector(".personalizacao__linguagem");

        aplicaHighlight(areaCodigo, linguagem);

        sessionStorage.removeItem("projetoClicado");
    }

    document.querySelector(".codigo__codigo").focus();
});