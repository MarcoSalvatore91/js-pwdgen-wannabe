console.log ('JS OK');

/*
1. Chiedi all’utente il suo nome
2. Chiedi il suo cognome
3. Chiedi il suo colore preferito
4. Scrivi sulla pagina nomecognomecolorepreferito21
*/

// Chiedi all'utente il suo nome

const firstName = prompt ('Qual è il tuo nome?');

console.log (firstName);

// 2. Chiedi il suo cognome

const lastName = prompt ('Qual è il tuo cognome?');

console.log (lastName);

// 3. Chiedi il suo colore preferito

const favouriteColor = prompt ('Qual è il tuo colore preferito?');

console.log (favouriteColor);

// 4. Scrivi sulla pagina nomecognomecolorepreferito21

document.getElementById('password').innerText = `${firstName}${lastName}${favouriteColor}21`;
