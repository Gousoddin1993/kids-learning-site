const data = [
["A","Apple 🍎"],
["B","Ball ⚽"],
["C","Cat 🐱"],
["D","Dog 🐶"],
["E","Elephant 🐘"],
["F","Fish 🐟"],
["G","Grapes 🍇"],
["H","Hat 🎩"],
["I","Ice Cream 🍦"],
["J","Jug 🏺"],
["K","Kite 🪁"],
["L","Lion 🦁"],
["M","Monkey 🐵"],
["N","Nest 🪺"],
["O","Orange 🍊"],
["P","Parrot 🦜"],
["Q","Queen 👑"],
["R","Rabbit 🐰"],
["S","Sun ☀️"],
["T","Tiger 🐯"],
["U","Umbrella ☂️"],
["V","Van 🚐"],
["W","Watch ⌚"],
["X","Xylophone 🎵"],
["Y","Yak 🐂"],
["Z","Zebra 🦓"]
];

let index = 0;

function showLetter() {
  document.getElementById("letter").innerText = data[index][0];
  document.getElementById("word").innerText = data[index][1];
}

function nextLetter() {
  index++;
  if (index >= data.length) index = 0;
  showLetter();
}

function prevLetter() {
  index--;
  if (index < 0) index = data.length - 1;
  showLetter();
}

function speakLetter() {
  let text = data[index][0] + " for " + data[index][1];
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 0.8;
  speechSynthesis.speak(speech);
}

showLetter();