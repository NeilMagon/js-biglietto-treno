// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.


// prezzo al km
const kmPrice = 0.21;
console.log(kmPrice)

// sconto < 18
const smallDiscount = 20;
console.log(smallDiscount)

// sconto > 65
const bigDiscount = 40;
console.log(bigDiscount)

// richiesta km da percorrere
const lenght = parseInt (prompt(`Quanti km devi percorrere?`));
console.log(lenght)

// richiesta età
const age = parseInt (prompt (`Quanti anni hai?`));
console.log(age)

// prezzo totale
let totalPrice = kmPrice * lenght;

if (age < 18){
    totalPrice = (totalPrice - (totalPrice * smallDiscount / 100));
} else if (age > 65){
    totalPrice = (totalPrice - (totalPrice * bigDiscount / 100));
}
console.log(totalPrice)

alert ((`Il tuo biglietto costa:`) + (totalPrice.toFixed(2)) + `€`);






