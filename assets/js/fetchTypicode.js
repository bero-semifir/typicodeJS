// récup de DOM
const userList = document.querySelector("ul#userList");

const API_URL = "https://jsonplaceholder.typicode.com/users"

let usersTab = [];

// logique du fetch

const getUsers = () => {
    // envoie d'un requête au serveur en back
    fetch(API_URL)
    // quand le serveur repond
    .then(resp=>{
        // affichage en console de la reponse
        console.log(resp);
        // récupération au format JSON du body
        // retourne une promesse
        return resp.json();
    })
    // quand la conversion du resp.json() se termine
    .then(users => {
        usersTab = users;
        // log du json
        console.log(users);
        // modif du DOM
        remplirListe(users);
    })
    console.log({usersTab});
}

const remplirListe = (tab) => {
    tab.forEach((user) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${user.name} - <a href="mailto:${user.email}">${user.email}</a>
        `;
        userList.appendChild(li);
    });
}

// events

window.addEventListener('load',getUsers)