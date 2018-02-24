$(document).ready(function() {

var winsCounter = 0;
var lossesCounter = 0;
var randomNumber = [];
var yourScore = [0];

$("#wins").append(wins);
$("#losses").append(losses);
$("#yourScore").append(yourScore);

function startGame() {
// Generate Random Target Number
randomTarget = Math.floor(Math.random() * 102)+19;
$("#randomTarget").append(randomTarget);

// Generate Random Number for Crystals
crystals = Math.floor(Math.random() * 12) +1;
$("#crystals").append(crystals);
console.log (crystals)
}
startGame();

});

// $(#click-me").on("click", function() {
// do whatever
// });