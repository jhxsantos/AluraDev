import { c_apicaHighlight } from "./c-highlight.js";

const storage      = sessionStorage.getItem("projetos");
const storageBusca = sessionStorage.getItem("projetosEncontrados");

preencheLista(storage);
preencheLista(storageBusca);
sessionStorage.removeItem("projetosEncontrados");

if (document.querySelector(".c__modulo-central").innerHTML === "") {
    document.querySelector(".c__modulo-central").innerHTML = "<h2>A busca não retornou projetos.</h2>";
};

document.querySelector(".pesquisa").focus();

export function preencheLista(storage) {
    let projetos = [];
    const cards = document.querySelector(".c__modulo-central");
    let listaDeCards = "";

    if (storage !== null) {
        projetos = JSON.parse(storage);

        projetos.forEach( (elemento, i) => {

            let textoCodigo = elemento.textoCodigoProjeto;

            if (elemento.linguagemProjeto === "html") {
                textoCodigo = textoCodigo.replace(/</gi, "&#60;");
                textoCodigo = textoCodigo.replace(/>/gi, "&#62;");
            }
            
            listaDeCards = listaDeCards.concat(`<div class="c__card__codigo" data-card_${i}>
                                                    <div class="c__moldura__codigo" style="background-color: ${elemento.corProjeto}">
                                                        <div class="c__codigo">
                                                            <div class="c__bolinhas">
                                                                <img  src="./img/bolinhas.svg" alt="bolinhas decorativas">
                                                                <div class="excluir" data-excluir_${i}>
                                                                    <img  src="./img/X-menu-aberto.svg" alt="excluir" height=12px>
                                                                </div>
                                                            </div>
                                                            <pre class="c__codigo__texto css" data-codigo__texto_${i} id="codigo__texto_${i}">
                                                                <code class="hljs c__codigo__codigo" id="c__codigo__codigo" 
                                                                    data-codigo__codigo_${i}
                                                                    aria-label="Texto do código">${textoCodigo}</code>
                                                            </pre>
                                                    
                                                        </div>
                                                    </div>
                                                    <div class="info__projeto">
                                                        <p class="info__projeto__titulo">${elemento.nomeProjeto}</p>
                                                        <p class="info__projeto__descricao">${elemento.descricaoProjeto}</p>
                                                        <div class="info__projeto__icones">
                                                            <div class="icones__sociais">
                                                                <div class="icone__comentarios icone__geral">
                                                                    <img src="./img/icone-comentarios.svg" alt="icone dos comentários">
                                                                    <p class="icone__texto">99</p>
                                                                </div>
                                                                <div class="icone__curtir icone__geral">
                                                                    <img src="./img/icone-curtir.svg" alt="icone do curtir">
                                                                    <p class="icone__texto">99</p>
                                                                </div>
                                                            </div>
                                                            <div class="icone__usuario icone__geral">
                                                                <img src="./img/foto-usuario-0.5X.svg" alt="icone do usuario">
                                                                <p class="icone__texto">Harry</p>                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`);
        }); 
        
        cards.innerHTML = listaDeCards;
        
        projetos.forEach( (elemento, i) => {
            let excluiu = false;

            const areaCodigo = document.querySelector("[data-codigo__texto_" + i + "]");
            const linguagem  = elemento.linguagemProjeto;
            c_apicaHighlight(areaCodigo, linguagem);

            document.querySelector("[data-excluir_" + i + "]").addEventListener("click", () => {             

                const nomeProjeto = elemento.nomeProjeto;
                
                const projetos = JSON.parse(sessionStorage.getItem("projetos"));

                projetos.forEach( (elemento, indiceProjeto)  => {
                
                    if (elemento.nomeProjeto === nomeProjeto) {
                        projetos.splice(indiceProjeto, 1);
                        sessionStorage.removeItem("projetos");
                        sessionStorage.setItem("projetos", JSON.stringify(projetos));
                        window.location.href = "./comunidade.html";
                    }
                });
                
                excluiu = true;
            });

            document.querySelector("[data-card_" + i + "]").addEventListener("click", () => {             

                if (!excluiu) {
                    const textoCodigoProjeto = elemento.textoCodigoProjeto;
                    const nomeProjeto        = elemento.nomeProjeto;
                    const descricaoProjeto   = elemento.descricaoProjeto;
                    const linguagemProjeto   = elemento.linguagemProjeto;
                    const corProjeto         = elemento.corProjeto;

                    const projeto = {
                        textoCodigoProjeto: textoCodigoProjeto,
                        nomeProjeto:        nomeProjeto,
                        descricaoProjeto:   descricaoProjeto,
                        linguagemProjeto:   linguagemProjeto,
                        corProjeto:         corProjeto
                    }

                    sessionStorage.setItem("projetoClicado", JSON.stringify(projeto));
                    window.location.href = "./index.html";
                }
                
                excluiu = false;
            });
        });
    } 
}