// Load all html and css before starting js
$(document).ready(function () {

  // variables - global
  var winsCounter = 0;
  var lossesCounter = 0;
  var crystalImages = ["assets/images/crystals-1.jpeg", "assets/images/crystals-2.jpeg", "assets/images/crystals-3.jpeg", "assets/images/crystals-4.jpeg"]

  // re-set Game parameters and clear target screens for each new run-through
  function startGame() {
    var randomTarget = 0;
    var crystalValue = [];
    var clickTotal = 0;
    var yourTotalScore = 0;
    // clears screen of last game parameters
    $("#randomTarget, #yourScore, #crystals").empty();
    // scores at start of game round 
    $("#winsCounter").text(winsCounter);
    $("#lossesCounter").text(lossesCounter);
    $("#yourScore").text(yourTotalScore);

    //set game parameters
    
    // Generate Random Target Number
    randomTarget = Math.floor(Math.random() * 102) + 19;
    $("#randomTarget").text(randomTarget);

    // Generate Random Number for Crystals
    for (var i = 0; i < crystalImages.length; i++) {
      randomNumber = Math.floor(Math.random() * 12) + 1;
      crystalValue.push(randomNumber);
    }

    // Creates buttons for Crystals, adds class, value and css
    for (var i = 0; i < crystalValue.length; i++) {
      var crystalButtons = $("<button>");
      crystalButtons.addClass("crystal-button crystal-image").val(crystalValue[i]);
      // crystalButtons.attr("data-let", crystalValue[i]); - another way to assign value
      crystalButtons.css({
        "background-image": "url('" + crystalImages[i] + "')",
        "background-size": "100%", "width": "240px", "height": "180px", "margin-right": "35px",
      });
      $("#crystals").append(crystalButtons);
    }

    // main game play
    $(".crystal-image").on("click", function () {
      crystalClick = parseInt(this.value);
      yourTotalScore += crystalClick;
      yourTotalScore = parseInt(yourTotalScore);
      $("#yourScore").text(yourTotalScore);

      target = parseInt(randomTarget);

      if (yourTotalScore === target) {
        winsCounter++;
        startGame();
      }

      else if (yourTotalScore > target) {
        lossesCounter++;
        startGame();
      }

    });
  }
  // starts game the first time
  startGame();
});