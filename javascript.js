/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her
const name = "Hans";
let age = 25;
let isStudent = true;
let programmingLanguages = ["Html", "Css", "JavaScript", "C#"];
/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
let a = 2;
let b = 5;
let c = 10;

console.log(a + b);
console.log(a - c);
console.log(c / b);
console.log(a * b);
console.log(b % c);
console.log((a * b) / c);
console.log(a++);
console.log((a += c));
console.log((a -= c));

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "h"; //Skriv navn for å teste
let userAge = 18; //Skriv age for å teste
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

if (
  userName !== "" &&
  userAge >= 18 &&
  userIsBlocked == false &&
  userIsLoggedIn == false
) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Welcome to our website " + `${userName}` + "!");
} else if (userIsLoggedIn == true) {
  console.log("You are already logged in.");
} else if (userName === "") {
  console.log("Please enter a valid username.");
} else if (userAge < 18) {
  console.log("You must be 18 or older to log in to this website.");
} else if (userIsBlocked == true) {
  console.log(
    "You have been blocked from this website. Please contact support."
  );
} else console.log("Unknown error. Refresh page and try again.");

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her

let userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);

// ******************************************************************************
