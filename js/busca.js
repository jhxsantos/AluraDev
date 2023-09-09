const inputBusca = document.querySelector(".pesquisa");

inputBusca.addEventListener('keyup', (event) => {

    var key = event.key;

    if (key == "Enter") { // codigo da tecla enter

        const projetosEncontrados = busca(inputBusca.value);

        sessionStorage.removeItem("projetosEncontrados");
        sessionStorage.setItem("projetosEncontrados", JSON.stringify(projetosEncontrados));

        window.location.href = "../comunidade.html";
    }
});

export function busca(valorBuscado) {

    const projetos = JSON.parse(sessionStorage.getItem("projetos"));
    const projetosEncontrados = [];

    projetos.forEach( (projeto) => {

        const nomeProjeto      = projeto.nomeProjeto.toLowerCase();
        const descricaoProjeto = projeto.descricaoProjeto.toLowerCase();

        if (nomeProjeto.indexOf(valorBuscado.toLowerCase()) > -1
            || descricaoProjeto.indexOf(valorBuscado.toLowerCase()) > -1) {

            projetosEncontrados.push(projeto);
        }
    });

    return projetosEncontrados;
}