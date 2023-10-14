// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Miss",
    lastName: "Scarlett",
    occupation: "Assistant",
    age: 34,
    description: "The Miss in the hause",
    image: "Miss.Scarlett.jpg",
    color: "red",
  },
  {
    firstName: "Colonel",
    lastName: "Mustard",
    occupation: "Militaty",
    age: 36,
    description: "Old retired colonel",
    image: "Colonel.jpg",
    color: "yellow",
  },
  {
    firstName: "Mr.",
    lastName: "White",
    occupation: "Business",
    age: 25,
    description: "The business man in the Hause",
    image: "Mr.White.jpg",
    color: "white",
  },
  {
    firstName: "Reverend",
    lastName: "Green",
    occupation: "Reverend",
    age: 50,
    description: "The reverend",
    image: "Reverend.jpg",
    color: "green",
  },
  {
    firstName: "Mr.",
    lastName: "Green",
    occupation: "Professor",
    age: 45,
    description: "Profesor in the hause",
    image: "Mr.Grenn.jpg",
    color: "blue",
  },
  {
    firstName: "Profesora",
    lastName: "Plum",
    occupation: "Professor",
    age: 60,
    description: "Proffessor in the hause",
    image: "Professora.jpg",
    color: "violet",
  },
];

// Rooms Array

const roomsArray = [
  { name: "cocina" },
  { name: "habitacion matrimonio" },
  { name: "habitacion invitados" },
  { name: "baño" },
  { name: "comedor" },
  { name: "recibidor" },
  { name: "piscina" },
  { name: "patio delantero" },
  { name: "patio trasero" },
  { name: "sala de limpieza" },
  { name: "despensa" },
  { name: "despacho" },
  { name: "pasillo" },
  { name: "escaleras" },
  { name: "biblioteca" },
];

// Weapons Array

const weaponsArray = [
  { name: "cuchillo", weight: 1 },
  { name: "pistola", weight: 2 },
  { name: "candelabro", weight: 2 },
  { name: "cuerda", weight: 3 },
  { name: "katana", weight: 5 },
  { name: "cuchara", weight: 0.5 },
  { name: "bate de beisbol", weight: 5 },
  { name: "abre cartas", weight: 1 },
  { name: "ladrillo", weight: 6 },
];

// ITERATION 2

function selectRandom(arrayToCheck) {
  if (arrayToCheck.length === 0) {
    return undefined;
  }
  let randomNumber = Math.floor(Math.random() * arrayToCheck.length);
  console.log(randomNumber);
  return arrayToCheck[randomNumber];
}

function pickMystery() {
  let pickMystery = {};
  pickMystery.suspect = selectRandom(suspectsArray);
  pickMystery.weapon = selectRandom(weaponsArray);
  pickMystery.room = selectRandom(roomsArray);

  return pickMystery;
}

// ITERATION 3

function revealMystery() {
  let mysteryToReveal = pickMystery();
  return `${mysteryToReveal.suspect.firstName} ${mysteryToReveal.suspect.lastName} killed Mr. Boddy using the ${mysteryToReveal.weapon.name} in the ${mysteryToReveal.room.name}!`;
}

console.log(revealMystery());
