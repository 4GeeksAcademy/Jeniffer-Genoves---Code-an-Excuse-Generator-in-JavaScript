import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'My boss'];
let action = ['ate', 'peed', 'crushed', 'broke', 'threw'];
let what = ['my homework', 'my phone', 'the car', 'my report', 'my wallet'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Generar función para índice aleatorio
function getRandomIndex(anyArray) {
  return Math.floor(Math.random() * anyArray.length);
}

function generateExcuse() {
  let partsOfSentence = [who, action, what, when];
  let excuse = "";

  for (let i = 0; i < partsOfSentence.length; i++) {
    let randomIndex = getRandomIndex(partsOfSentence[i]);
    excuse += partsOfSentence[i][randomIndex] + " ";
  }

  return excuse.trim() + ".";

}
window.onload = function() {
  //write your code here
  // document.querySelector('#excuse').innerHTML = who[4] + ' ' + action [1] + ' ' + what [2] + ' ' +  when[3]
  let excuseElement = document.getElementById("excuse");
  excuse.innerHTML = generateExcuse();

  document.getElementById('excuseBtn').addEventListener('click', () => {
  excuseElement.textContent = generateExcuse();
});

};

