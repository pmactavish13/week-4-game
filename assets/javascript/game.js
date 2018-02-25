$(document).ready(function() {

var winsCounter = [0];
var lossesCounter = [0];
var randomTarget = [0];
var yourScore = [];
var crystalValue = [];
var crystals = [firstCrystal, secondCrystal, thirdCrystal, fourthCrystal];
var crystalImages = ["assets/images/crystals-1.jpg", "assets/images/crystals-2.jpg", "assets/images/crystals-3.jpg", "assets/images/crystals-4.jpg"];

$("#winsCounter").append(winsCounter);
$("#lossesCounter").append(lossesCounter);
$("#yourScore").append(yourScore);

function startGame() {

    // Generate Random Target Number
randomTarget = Math.floor(Math.random() * 102)+19;
$("#randomTarget").append(randomTarget);

// Generate Random Number for Crystals
for (var i = 0; i < 4; i++) {
randomNumber = Math.floor(Math.random() * 12) +1;
crystalValue.push(randomNumber);
}



            </button>


        <div class="col-xs-6 col-md-3">   
            <button type="button" class="crystals" id="fourthCrystal">
                <img class="crystals-image" src="assets/images/crystals-4.jpg" alt="Crystal">
            </button>

var firstCrystal = crystalValue[0];
var secondCrystal = crystalValue[1];
var thirdCrystal = crystalValue[2];
var fourthCrystal = crystalValue[3];

console.log(firstCrystal);

 // $("#crystal-1").on("click", function() {



}

// var crystalButton = $("<button>");
//crystalButton.attr("data-let",crystalValue);


//$("#crystals").append(yourScore);
// $(".crystals") .each(function
// });

startGame();

});

// while (condition) {
 //   code block to be executed
// }


// If your score = the computer's pick you let them know.
//if (parseInt(youScore) === randomNumber) {
//    winsCounter++;
//    lockGame = true;
//  }

  // If the numbers did not match. You also let them know
//  if (parseInt(yourScore) > randomNumber) {
//    lossesCounter++;
//    lockGame = true;

// If your pick matched the computer's pick you let them know.
//if (parseInt(yourPick) === computerPick) {
//    $("#result").text("Yep! You got it! Refresh the page to play again.");
//    lockGame = true;
//  }

  // If the numbers did not match. You also let them know
//  else {
 //   $("#result").text("Nope. Refresh the page to play again.");
 //   lockGame = true;
 // }

// $(#click-me").on("click", function() {
// do whatever