const emailList = ["ste@gmail.com", "stemas@gmail.com", "ste.mastrantonio@gmail.com", "stemast@gmail.com"];

const userEmail = prompt("scrivi la tua mail");
console.log("puoi accedere con questa mail", userEmail);

let emailFound = false;

for (let i = 0; i < emailList.length; i++) {
    
    const thisEmail = emailList[i];
    if (thisEmail === userEmail) {
        emailFound = true;
    } 
    console.log(thisEmail, "l'ho trovata?", emailFound);
}

console.log("Risultato finale", emailFound);
// OUTPUT
// dire all'utente l'esito della ricerca
if ( emailFound === true ) {
    console.log("Ho trovato la mail");
} else {
    console.log("Spiacente, non ho trovato la mail");
}