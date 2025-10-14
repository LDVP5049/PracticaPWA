const lista = document.querySelector("#lista");

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data=>{
    console.log(data)
    let html = '';
    data.forEach(users=>{
        html += `<div class = "card">
        <h2>${users.name}</h2>
        <div>${users.email}</div>
        </div>
        `
    });
    lista.innerHTML = html;
})