const user = Math.floor(Math.random()*6 + 1);
console.log(user);


const computer = Math.floor(Math.random()*6 + 1);
console.log(computer);


let winner = "";

if (user > computer) {
    winner = "Ha vinto il Giocatore";
    console.log("Ha vinto il Giocatore");
}   else if (computer > user) {
    winner = "Ha vinto il Computer";
    console.log("Ha vinto il Computer");
}   else {
    winner = "Giocatore e computer hanno ottenuto stesso risultato";
    console.log("Giocatore e computer hanno ottenuto stesso risultato");
}


document.getElementById("risultato").innerHTML = winner;