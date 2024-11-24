// Oppgave 1
console.log("Oddetall eller partall")
var OddePar = 9;

if (OddePar % 2 == 0) {
    console.log(OddePar + " er et par tall")
} else {
    console.log(OddePar + " er et odde tall")
}

// Oppgave 2
console.log("Kategorisering av alder") 
var alder = 290;

if (alder <= 13 && alder >= 0) {
    console.log("barn")
} else if (alder <= 19 && alder >= 13) {
    console.log("tenåring")
} else if (alder <= 64 && alder >= 20) {
    console.log("Voksen")
} else if (alder >= 65) {
    console.log("pensjonist")
} else {
    console.log("noe er feil")
}

// Oppgave 3
console.log("Logg inn-sjekk")

var brukernavn = "HTMLkrigeren"
var passord = "pasord444455"

if (brukernavn == "HTMLkrigeren" && passord == "passord123") {
    console.log("Logger inn")
} else {
    console.log("kjekk om passord og brukernavn er riktig")
}

// Oppgave 4
console.log("Årstid fra måned");

var velgmånte = 6;

if (velgmånte == 12 || velgmånte == 2 || velgmånte == 1) {
    console.log("det er vinter")
} else if (velgmånte == 3 || velgmånte == 4 || velgmånte == 5) {
    console.log("det er vår")
} else if (velgmånte == 9 || velgmånte == 10 || velgmånte == 11) {
    console.log("det er høst")
} else if (velgmånte == 6 || velgmånte == 7 || velgmånte == 8) {
    console.log("det er sommer")
} else {
    console.log("noe er feil")
}

// Oppgave 5
console.log("BMI kalkulator")

var høyde = 183; 
var vekt = 30;

var høydemeter = høyde / 100

var bmi = vekt / (høydemeter * høydemeter)


if (bmi < 18.5 && bmi > 0) {
    console.log("undervektig")
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("normalvekt")
} else if (bmi >= 25 &&  bmi < 29.9 ) {
    console.log("overvektig")
} else if (bmi > 30) {
    console.log("femde")
} else {
    console.log("tror ikke på deg")
}


// Oppgave 6
console.log("Billettpris basert på alder")

var Alder = 5;

if (Alder < 6) {
    console.log("under 6, gratis")
} else if (Alder >= 6 && Alder < 10) {
    console.log("Barn, 80kr")
} else if (Alder >= 10 && Alder < 20) {
    console.log("Student, 100kr")
} else if (Alder >= 20 && Alder < 60) {
    console.log("Voksen, 150kr")
} else if (Alder >= 60) {
    console.log("pansjonist, 100kr")
}

// Oppgave 7
console.log("Gradering basert på poengsum")

var karakter = 68;

if (karakter <= 100 && karakter >= 85) {
    console.log("Karakter A")
} else if (karakter <= 84 && karakter >= 70 ) {
    console.log("Karakter B")
} else if (karakter <= 69 && karakter >= 55 ) {
    console.log("karakter C")
} else if (karakter <= 54 && karakter >= 40 ) {
    console.log("Karakter D")
} else if (karakter <= 39 && karakter >= 0 ) {
    console.log("karakter F")
} else {
    console.log("du kan ikke være så smart")
}

// Oppgave 8
console.log("Rabatt på kjøp")

var varer = 578;

var tilbud1 = varer / 100 * 10
var tilbud2 = varer / 100 * 50

if (varer < 200 && varer > 0) {
    console.log("det blir " + varer + " KR")
} else if (varer >= 200 && varer < 500) {
    console.log("Rabatt, det blir " + (varer - tilbud1) + "KR") 
} else if (varer >= 500) {
    console.log("Rabatt, det blir " + (varer - tilbud2) + "KR") 
} else {
    console.log("du trenger å bruke penger for å handle");
}

// Oppgave 9
console.log("SKuddår")

let år = 2025;

if (år % 4 === 0) {  // % betyr rest
    if (år % 100 === 0) { 
        if (år % 400 === 0) {  
            console.log(år + " er et skuddår");
        } else {
            console.log(år + " er ikke et skuddår");
        }
    } else {
        console.log(år + " er et skuddår");
    }
} else {
    console.log(år + " er ikke et skuddår");
}
// Oppgave 10
console.log("Månedsdager") 

var måned = "desember"

if (måned == "Januar" || måned == "januar") {
    console.log("det er 31 dager i januar");
} else if (måned == "Februar" || måned == "februar") {
    console.log("det er 28 dager i februar");
} else if (måned == "Mars" || måned == "mars") {
    console.log("det er 31 dager i mars");
} else if (måned == "April" || måned == "april") {
    console.log("det er 30 dager i April");
} else if (måned == "Mai" || måned == "mai") {
    console.log("det er 31 dager i mai");
} else if (måned == "Juni" || måned == "juni") {
    console.log("det er 30 dager i juni");
} else if (måned == "Juli" || måned == "juli") {
    console.log("det er 31 dager i juli");
} else if (måned == "August" || måned == "august") {
    console.log("det er 31 dager i august");
} else if (måned == "September" || måned == "september") {
    console.log("det er 30 dager i september");
} else if (måned == "Oktober" || måned == "oktober") {
    console.log("det er 31 dager i Oktober");
} else if (måned == "November" || måned == "november") {
    console.log("det er 30 dager i november");
} else if (måned == "Desember" || måned == "desember") {
    console.log("det er 31 dager i Desember");
} 


