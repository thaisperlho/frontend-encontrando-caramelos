const url = 'http://localhost:8080/pets'
let pets;
var count = 0;

document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        petGetAll();
    }
}


function petGetAll() {
    $("#pets-list").empty();
    $.getJSON(url, function(data) {
        pets = data;
        const card = $(`<div class="row d-flex justify-content-around">`);

        const colunas = $(`<div class="col-sm-12">`);
        
        pets.forEach(e => {
            const div = $(`<div class="card mb-4" style="width:200px">`);
            const img = $("<img src=\"img/cao.png\">");
            const nome = $(`<h6><b>${e.nome}</b></h6>`);
            const idade = $(`<h6>${e.idade}</h6>`);
            const sexo = $(`<h6>${e.sexo}</h6>`);
            const raca = $(`<h6>${e.raca}</h6>`);
            const cor = $(`<h6>${e.cor}</h6>`);
            const obsHistorico = $(`<p>${e.obsHistorico}</p>`);
            const vacinado = $(`<p>${e.vacinado}</p>`);
            const vermifugado = $(`<p>${e.vermifugado}</p>`);
            const castrado =  $(`<p>${e.castrado}</p>`);
            const a = $(`<img class="btn" src=\"img/excluir1.png\" heigth="30" width="60" >`);
            const editar = $(`<img class="btn" src=\"img/editar.png\" heigth="30" width="60" >`);

            colunas.append(card.append(div.append(img,nome,idade, sexo, raca, cor, obsHistorico, vacinado, vermifugado, castrado, a, editar)))
           
            const divSepara = $(`<br></br>`);
            card.append(divSepara);
       
        });
        $("#pets-list").append(card);
    });
}

function deletar(){

}