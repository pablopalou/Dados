
// numero random para el primer dado
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

//tengo que seleccionar la foto correspondiente al numero randomNumber1
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //agarro a quien tenga img como clase.

image1.setAttribute("src", randomImageSource); //le seteo la nueva src (imagen)

//hago lo mismo para el segundo dado

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//ahora escribo quien gano o si hay empate

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; //busco el heading y pongo que gano el 1
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; //busco el heading y pongo que gano el 2
}
else {
  document.querySelector("h1").innerHTML = "Draw!"; //busco el heading y pongo que empataron
}
