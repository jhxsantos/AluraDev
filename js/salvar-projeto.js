const btnSalvar = document.querySelector(".botao--salvar-projeto");

btnSalvar.addEventListener("click", (event) => {

    // sessionStorage.clear();
    // return;

    event.preventDefault();

    if (document.querySelector(".codigo__codigo").textContent === "") {

        swal("Preencha o campo do código do projeto.").then( () => {
            document.querySelector(".codigo__codigo").focus();
        });
    } else {        
        const formulario = document.querySelector(".formulario");    
        let isFormValid = formulario.checkValidity();

        if (!isFormValid) {
            formulario.reportValidity();
        } else {                    
            const textoCodigoProjeto = document.querySelector(".codigo__codigo").textContent;
            const nomeProjeto        = document.querySelector(".projeto__nome").value;
            const descricaoProjeto   = document.querySelector(".projeto__descricao").value;
            const linguagemProjeto   = document.querySelector(".personalizacao__linguagem").value;
            const corProjeto         = document.querySelector(".color-picker").value;

            const projeto = {
                textoCodigoProjeto: textoCodigoProjeto,
                nomeProjeto:        nomeProjeto,
                descricaoProjeto:   descricaoProjeto,
                linguagemProjeto:   linguagemProjeto,
                corProjeto:         corProjeto
            }

            const storage = sessionStorage.getItem("projetos");
            let projetos = []

            if (storage !== null) {
                projetos = JSON.parse(storage);
            }

            let indiceProjeto = -1;
            projetos.forEach( (elemento, i) => {
                if (elemento.nomeProjeto === nomeProjeto) {
                    indiceProjeto = i;
                }
            });

            if (indiceProjeto > -1) {
                swal({
                    title: `Já existe um projeto com o nome "${nomeProjeto}"!`,
                    text: "Deseja sobrescrever o existente?",
                    icon: 'warning',
                    closeOnClickOutside: false,
                    buttons: {
                        cancel: {
                          text: "Cancelar",
                          value: null,
                          visible: true,
                          className: "",
                          closeModal: true
                        },
                        confirm: {
                          text: "Sobrescrever",
                          value: true,
                          visible: true,
                          className: "",
                          closeModal: true
                        }
                    }                    
                }).then((result) => {   
                    if (result) {
                        projetos.splice(indiceProjeto, 1, projeto);
                        sessionStorage.removeItem("projetos");
                        sessionStorage.setItem("projetos", JSON.stringify(projetos));
        
                        document.querySelector(".formulario").reset();
                        document.querySelector(".moldura__codigo").style.backgroundColor = document.querySelector(".color-picker").value;
                        document.querySelector(".codigo__codigo").textContent = "";
                    } else {
                        document.querySelector(".projeto__nome").focus();
                    }
                })
            } else {
                projetos.push(projeto);
                sessionStorage.removeItem("projetos");
                sessionStorage.setItem("projetos", JSON.stringify(projetos));

                document.querySelector(".formulario").reset();
                document.querySelector(".moldura__codigo").style.backgroundColor = document.querySelector(".color-picker").value;
                document.querySelector(".codigo__codigo").textContent = "";
            }

            // if (existeProjeto) {
            //     swal("Já existe um projeto com esse nome.").then( () => {
            //         document.querySelector(".projeto__nome").focus();
            //     });
            // } else {
            //     projetos.push(projeto);
            //     sessionStorage.removeItem("projetos");
            //     sessionStorage.setItem("projetos", JSON.stringify(projetos));

            //     document.querySelector(".formulario").reset();
            //     document.querySelector(".moldura__codigo").style.backgroundColor = document.querySelector(".color-picker").value;
            //     document.querySelector(".codigo__codigo").textContent = "";
            // }
        }
    } 
});