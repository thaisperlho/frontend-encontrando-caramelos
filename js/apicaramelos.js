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
        const card = $("<div>");
        pets.forEach(e => {
            const img = $("<img src=\"img/cao.png\">")
            const div = $("<div>");
            //const chk = $(`<input type='checkbox' ${(e.status == 'DONE') ? 'checked' : '' } onclick="${(e.status == 'DONE') ? 'markPending(this.value)' : 'markDone(this.value)'}" value=${e.id}>`); 
            const nome = $(`<h4><b>${e.nome}</b></h4>`);
            const idade = $(`<p>${e.idade}</p>`)
            card.append(img,div.append(nome,idade));
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
            const img = $(`<img src="img/gato.png" class="card-img-top" alt="...">`)
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
    