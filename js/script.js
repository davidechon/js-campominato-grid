// alert('Hello World!');

// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Flowchart
// 1. Creare una scelta di livello di difficoltà da 1 a 3 con relativo bottone
// 2. Creare la griglia difficoltà 1 con numeri generati da 1 a 100
// 3. Creare la griglia difficoltà 2 con numeri generati da 1 a 81
// 4. Creare la griglia difficoltà 3 con numeri generati da 1 a 49
// 5. Ogni cella è cliccabile e cambia colore fisso

/////////////////////////////////////////////////////////////////////////

// 2. Creare la griglia difficoltà 1 con numeri generati da 1 a 100
// Genero la tabella numeri 1-100
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 100));

// Genero la griglia numeri
function stampaGriglia(){
  const colNum = 64;
  const colXRow = 8;

  let app = document.getElementById("app");
  app.innerHTML= "";
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  let cols = creaCol(colNum);
  console.log(cols);
  row.innerHTML = cols;
  app.append(row);
}

function creaCol(numCol) {
  let cols = "";
  let numUsati = [];
  let index = 0;

  while (numUsati.length <=numCols && index !==400) {
    let numCell = getRandomInt(1, numCols);
    if (!numUsati.includes(numCell)) {
      cols += `
      <div class="col">${numCell}</div>
      `;
    }
  }
  return cols;
}
document.getElementById("generate").addEventListener("click", stampaGriglia);


