// Load all html and css before starting js
$(document).ready(function() {

// variables
var winsCounter = (0);
var lossesCounter = "";
var randomTarget = "";
var yourScore = (0);
var crystalValue = [];
var crystalImages = ["assets/images/crystals-1.jpeg", "assets/images/crystals-2.jpeg", "assets/images/crystals-3.jpeg", "assets/images/crystals-4.jpeg"]
var clickTotal = "";
var yourTotalScore = "";

// Counters
$("#winsCounter").text(winsCounter);
$("#lossesCounter").text(lossesCounter);
$("#yourScore").text(yourScore);

function startGame() {
  //function initializeTotalScore() {
  // yourScore = "";

    // Generate Random Target Number
randomTarget = Math.floor(Math.random() * 102)+19;
$("#randomTarget").append(randomTarget);

// Generate Random Number for Crystals
for (var i = 0; i < crystalImages.length; i++) {
randomNumber = Math.floor(Math.random() * 12) +1;
crystalValue.push(randomNumber);
}
// Creates buttons for Crystals, adds class, value and css
for (var i=0; i<crystalValue.length; i++) {
    var crystalButtons = $("<button>");
    crystalButtons.addClass("crystal-button crystal-image") .val(crystalValue[i]);
    // crystalButtons.attr("data-let", crystalValue[i]);
    crystalButtons.css({
      "background-image" : "url('" + crystalImages[i] + "')",
      "background-size" : "100%", "width": "240px", "height": "180px", "margin-right": "35px",
    }); 
    $("#crystals").append(crystalButtons);
}




$( ".crystal-image").on("click", function() {
crystalClick = parseInt(this.value);
// console.log(typeof(crystalClick));
 yourTotalScore  += crystalClick;
 //console.log(crystalClick);

//console.log(yourTotalScore);
yourTotalScore = parseInt(yourTotalScore, 10);
$("#yourScore").html(yourTotalScore);

target = parseInt(randomTarget);

if (yourTotalScore === target) {
winsCounter++;
$("winsCounter").text(winsCounter);

}
//$("#winsCounter").append(winsCounter);
//$("#lossesCounter").append(lossesCounter);
else if (yourTotalScore > target) {
lossesCounter--;
$("lossesCounter").html(lossesCounter);
console.log (lossesCounter);
}



 }); 
}
startGame();
});            


// // while (condition) { */}
//  /* //   code block to be executed
// // 


// // If your score = the computer's pick you let them know.
// //if (parseInt(youScore) === randomNumber) curly
// //    winsCounter++; 
// //    lockGame = true;
// //  curly

//   // If the numbers did not match. You also let them know
// //  if (parseInt(yourScore) > randomNumber) curly
// //    lossesCounter++;
// //    lockGame = true;
