document.addEventListener('DOMContentLoaded', () => {
    const gumbZaDodavanje = document.getElementById('dodaj-zadatakgumb');
    const unosPolje = document.getElementById('novi-zadatak-unos');
    const listaZadataka = document.getElementById('lista-zadataka');
    
    gumbZaDodavanje.addEventListener('click', () => {
        const tekstZadatka = unosPolje.value.trim();
        
        if (tekstZadatka) {
            const li = document.createElement('li');
            li.textContent = tekstZadatka;
            
            const zavrsenoButton = document.createElement('button');
            zavrsenoButton.textContent = 'Završeno';
            zavrsenoButton.addEventListener('click', () => {
                li.classList.toggle('zavrseno');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Obriši';
            deleteButton.addEventListener('click', () => {
                listaZadataka.removeChild(li);
            });

            li.appendChild(zavrsenoButton);
            li.appendChild(deleteButton);

            listaZadataka.appendChild(li);

            unosPolje.value = '';
        }
    });
});

const korisnici = [
    { id: 1, username: "Leonardo", password: "12345678" },
    { id: 2, username: "Roko", password: "87654321" },
];


function login() {
    const korisnickoIme = document.getElementById("username").value.trim();
    const lozinka = document.getElementById("password").value.trim();
    const poruka = document.getElementById("login-message");
    const resurs = document.getElementById("protected-resource");

    if (!korisnickoIme || !lozinka) {
        poruka.textContent = "Molimo unesite korisničko ime i lozinku.";
        poruka.style.color = "red";
        resurs.style.display = "none";
        return;
    }

    const pronadeni = korisnici.find(u => u.username === korisnickoIme && u.password === lozinka);

    if (pronadeni) {
        poruka.textContent = "Prijava uspješna!";
        poruka.style.color = "green";
        resurs.style.display = "block";
    } else {
        poruka.textContent = "Pogrešni podaci. Pokušajte ponovno.";
        poruka.style.color = "red";
        resurs.style.display = "none";
    }
}

