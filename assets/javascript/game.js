// Variables

var chosenNumber = $(".chosenNumber");
var winCounter = 0;
var lossCounter = 0;
var yourNumber = 0;
var compNumber = [Math.floor(Math.random() * 120) + 19];

var crystalValueArr;
var crystalValueOne = $("#crystalValue");
var crystalValueTwo = $("#crystalValueTwo"); 
var crystalValueThree = $("#crystalValueThree"); 
var crystalValueFour = $("#crystalValueFour"); 

$(document).ready(function() { //Checking if the page is ready to load the game.

    function initializeGame() { //Initializing the game on page load.

      compNumber = [Math.floor(Math.random() * 120) + 19];

       chosenNumber.text("Match my number: " + compNumber); //chosen number will be anywhere between 19 - 120.
       
       yourNumber = 0;

       crystalValues();

    }

    function crystalValues() { //generating crystal values
        
        crystalValueArr = []; //empty crystal value array to push 4 values into
        
        for (var i = 0; i < 4; i++) { //Loops 4 times
            
            var crystalValueStat = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12

            var intCrystalValue = parseInt(crystalValueStat); //changes output from crystalValueStat to an integer in an array.

            crystalValueArr.push(intCrystalValue); //pushes the value into the crystalValueArr.
            
            console.log("crystal one: " + crystalValueStat);
        }

        assignCrystalValue();
        
        console.log(crystalValueArr);
            
    }

    function assignCrystalValue() { //Assigning the crystals different values every time game initiates

        //crystal buttons
        // var updateYourNumber = yourNumber += crystalValueArr[i]; potential solution
         

        $("#crystalValue").on("click", function() {

            yourNumber = yourNumber + crystalValueArr[0];

            $(".yourNumber").html(yourNumber);

            winGame();
            loseGame();

        }); 
        
        $("#crystalValueTwo").on("click", function() {

            yourNumber = yourNumber + crystalValueArr[1];

            $(".yourNumber").html(yourNumber);

            winGame();
            loseGame();

        }); 

        $("#crystalValueThree").on("click", function() {

            yourNumber = yourNumber + crystalValueArr[2];

            $(".yourNumber").html(yourNumber);

            winGame();
            loseGame();

        }); 

        $("#crystalValueFour").on("click", function() {

            yourNumber = yourNumber + crystalValueArr[3];

            $(".yourNumber").html(yourNumber);

            winGame();
            loseGame();
            
        }); 
        
    }

    function winGame() {

        console.log(yourNumber);
        console.log(compNumber);
        console.log(yourNumber === compNumber);

        if (yourNumber === compNumber) { //if user number is equal to random generated number ---------- this isn't registering wins, but losses are registering?

            winCounter++; // increment win counter by 1, if condition is met.

            $(".winCounter").html("Wins: " + winCounter); //display number of wins on HTML 

            yourNumber = 0;

            $(".yourNumber").html(yourNumber);
            
            initializeGame();

            console.log(winCounter);
        }

    }

    function loseGame() {
        
        if (yourNumber > compNumber) {

            lossCounter++;

            $(".lossCounter").html("Losses: " + lossCounter);

            yourNumber = 0;

            $(".yourNumber").html(yourNumber);

            initializeGame();

            console.log(lossCounter);
            console.log(yourNumber);
        }

    }

    initializeGame(); //Starts game when page loads.
    
});
