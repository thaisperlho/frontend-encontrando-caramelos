const url = 'http://localhost:8080/pets'
let pets;


document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        petGetAll();
    }
}

function petGetAll() {
    $("#pet-list").empty();
    $.getJSON(url, function(data) {
        pets = data;
        const ul = $("<ul>");
        pets.forEach(e => {
            const li = $("<li>");
            //const chk = $(`<input type='checkbox' ${(e.status == 'DONE') ? 'checked' : '' } onclick="${(e.status == 'DONE') ? 'markPending(this.value)' : 'markDone(this.value)'}" value=${e.id}>`); 
            const nome = $(`<label>${e.nome}</label>`);
            ul.append(li.append(nome));
        });
        $("#pets-list").append(ul);
    });
        
}