// Load all html and css before starting js
$(document).ready(function() {

// variables
var winsCounter = [0];
var lossesCounter = [0];
var randomTarget = [0];
var yourScore = (0);
var crystalValue = [];
var crystalImages = ["assets/images/crystals-1.jpeg", "assets/images/crystals-2.jpeg", "assets/images/crystals-3.jpeg", "assets/images/crystals-4.jpeg"]
var clickTotal = "";
var yourTotalScore = "";

// Counters
$("#winsCounter").append(winsCounter);
$("#lossesCounter").append(lossesCounter);
$("#yourScore").append(yourScore);

function startGame() {

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

//function initializeTotalScore() {
  // yourScore = "";

//
$( ".crystal-image").on("click", function() {
this.value = parseInt(this.value, 10);
 yourTotalScore  += this.value;

 // console.log(yourTotalScore);

 yourTotalScore = parseInt(yourTotalScore, 10);

 for (var i  = 0; i < yourTotalScore.length; i++){

  total  += yourTotalScore[i];

  console.log (total);
 }
//yourTotalScore = clickTotal + clickTotal;
//$.isNumeric("clickTotal");
//var result = clickTotal + yourTotalScore
//yourTotalScore.push(result);
//newTotal = yourScore;
 //$("#yourScore").html(yourTotalScore);
  //console.log(yourTotalScore);
  

 }); 
// //   $("#crystals").append(yourScore);
//$( "#yourScore" ).replaceWith( "<h2>New heading</h2>" );

//}); 



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
