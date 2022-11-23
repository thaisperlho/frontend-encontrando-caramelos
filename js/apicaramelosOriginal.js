const url = 'http://localhost:8080/pets'
let pets;


document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        petGetAll();
        petGetAll2();
    }
}

function petGetAll() {
    $("#pets-list").empty();
    $.getJSON(url, function(data) {
        pets = data;
        const card = $(`<div class="card" style="width: 18rem;">`);
        pets.forEach(e => {
            const img = $("<img src=\"img/cao.png\">")
            const div = $("<div>");
            const nome = $(`<h4><b>${e.nome}</b></h4>`);
            const idade = $(`<p>${e.idade}</p>`)
            const sexo = $(`<p>${e.sexo}</p>`)
            const raca = $(`<p>${e.raca}</p>`)
            const cor = $(`<p>${e.cor}</p>`)
            const obsHistorico = $(`<p>${e.obsHistorico}</p>`)
            const vacinado = $(`<p>${e.vacinado}</p>`)
            const vermifugado = $(`<p>${e.vermifugado}</p>`)
            const castrado =  $(`<p>${e.castrado}</p>`)
            const a = $(`<a href="#" class="btn btn-primary">Deletar</a>`)
            card.append(img,div.append(nome,idade, sexo, raca, cor, obsHistorico, vacinado, vermifugado, castrado, a))
        });
        $("#pets-list").append(card);
    });
}  

function petGetAll2() {
    $("#pet-card").empty();
    $.getJSON(url, function(data) {
        pets = data;
        const b = $(`<div class="row">`)
        const c = $(`<div class="col">`)
        const card = $(`<div class="card" style="width: 18rem;">`)
        for(let i=0; i<3; i++){
            const img = $("<img src=\"img/gato.png\">")
            const div = $("<div>");
            //const chk = $(`<input type='checkbox' ${(e.status == 'DONE') ? 'checked' : '' } onclick="${(e.status == 'DONE') ? 'markPending(this.value)' : 'markDone(this.value)'}" value=${e.id}>`); 
            const nome = $(`<h5 class="card-title">${pets[i].nome}</h5>`);
            const idade = $(`<p class="card-text">${pets[i].idade}</p>`)
            const a = $(`<a href="#" class="btn btn-primary">visualisar</a>`)
            card.append(img,div.append(nome,idade,a));
        }
        for(let i=0; i<3; i++){
            c.append(card);
        }
        $("#pet-card").append(b.append(c));
    });
}