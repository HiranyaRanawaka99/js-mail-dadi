
// //EMAIL

// const checked = document.getElementById('checked');
// const notChecked = document.getElementById('not-checked');

// //Chiedo all'utente la sua mail
// //const yourEmail = prompt ('Inserisci la tua mail', 'pinco@email.it');

// //Checked email's Array 
// const checkedMails = ['emoployee@email.it', 'pinco@email.it','pallino@email.it', 'pippo@email.it','utente@email.it'];

// //Email valida o non valida?

// let found = false;

// for (let i= 0; i < checkedMails.length; i++) {

//     if (yourEmail === checkedMails[i]) {
//         found = true;
//     }
// }

// if (found) {
//     checked.innerHTML = 'Accesso effettuato correttamente';
// } else {
//     notChecked.innerHTML = 'La tua mail non è verificata';
//}

//DICES

//Genero numero casualmente da 1 a 6;

const numUser = Math.floor(Math.random() * 6) + 1;
const numComputer = Math.floor(Math.random()* 6) + 1;


console.log(numUser);
console.log(numComputer);

if (numUser > numComputer) {
    console.log('hai vinto')
} else if (numUser < numComputer) {
    console.log ('hai perso')
} else {
    console.log('il risultato è pari')
}