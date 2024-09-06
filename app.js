function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<p style='color:#daa520;'>Nada foi encontrado. Você precisa digitar o nome de um campeão</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let nome = "";
    let lore = "";
    let tags = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        lore = dado.lore.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (nome.includes(campoPesquisa) || (lore.includes(campoPesquisa)) || (tags.includes(campoPesquisa))) { 
            resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.lore}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
             </div>
            `
        }

    }

    if (!resultados) {
        resultados = section.innerHTML = "<p style='color:#daa520;'>Nada foi encontrado</p>";
        console.log(resultados)
    }

    section.innerHTML = resultados;
}







