
//EMAIL

const checked = document.getElementById('checked');
const notChecked = document.getElementById('not-checked');

//Chiedo all'utente la sua mail
const yourEmail = prompt ('Inserisci la tua mail', 'pinco@email.it');

//Checked email's Array 
const checkedMails = ['emoployee@email.it', 'pinco@email.it','pallino@email.it', 'pippo@email.it','utente@email.it'];

//Email valida o non valida?

let found = false;

for (let i= 0; i < checkedMails.length; i++) {

    if (yourEmail === checkedMails[i]) {
        found = true;
    }
}

if (found) {
    checked.innerHTML = 'Accesso effettuato correttamente';
} else {
    notChecked.innerHTML = 'La tua mail non è verificata';
}

//DICES

const gameArea = document.getElementById('game-area');
const yourGuess = document.getElementById('your-guess');
const computerGuess = document.getElementById('computer-guess')
const winner = document.getElementById('winner');

//Genero numero casualmente da 1 a 6;

const numUser = Math.floor(Math.random() * 6) + 1;
yourGuess.innerHTML =  `Il risultato del tuo dado è: ${numUser} `

const numComputer = Math.floor(Math.random()* 6) + 1;
computerGuess.innerHTML =  `Il risultato del dado del computer è: ${numComputer} `

if (numUser > numComputer)  {
    winner.innerHTML= 'Il vincitore sei TU!';
} else if (numUser < numComputer) {
    winner.innerHTML= 'hai perso';
} else {
    winner.innerHTML= 'il risultato è pari';
}