// Variables

var chosenNumber = $(".chosenNumber");
var winCounter = $(".winCounter");
var lossCounter = $(".lossCounter");
var yourNumber = $(".yourNumber");

var crystalValueArr;
var crystalValue = $(".crystalValue");
var crystalValueTwo = $(".crystalValueTwo");
var crystalValueThree = $(".crystalValueThree");
var crystalValueFour = $(".crystalValueFour");

// var crystalValueOne = crystalValueArr[0];
// // var crystalValueTwo = crystalValueArr[1];
// // var crystalValueThree = crystalValueArr[2];
// // var crystalValueFour = crystalValueArr[3];

$(document).ready(function() { //Checking if the page is ready to load the game.

    function initializeGame() { //Initializing the game on page load.

        // Generate random number from 19 - 120 for the computer number.
        // start user value to 0.
        // generate random values to each crystal.

       chosenNumber.text("Match my number: " + [Math.floor(Math.random() * 120) + 19]); //chosen number will be anywhere between 19 - 120.

       yourNumber.text(0); //displaying user score on start of the game
       
       winCounter();
       lossCounter();
       assignCrystalValue();

    }


    function userNumber() { //Being able to add randomly assigned crystal values to the user number

        yourNumber += crystalValue;

    }

    function assignCrystalValue() { //Assigning the crystals different values every time game initiates

        $(".crystalValue").on("click", function() {
        
            //Currently this will only output the same number amongst the 4 crystals.

        for (var i = 0; i < 4; i++) { //Loops 4 times

            crystalValueArr = []; //empty crystal value array to push 4 values into

            var crystalValue = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12
            
            if ((crystalValueArr === -1) || (crystalValueArr === crystalValueArr[3])) {

            crystalValueArr[0].push(crystalValue);
            crystalValueArr[1].push(crystalValueTwo);
            crystalValueArr[2].push(crystalValueThree);
            crystalValueArr[3].push(crystalValueFour);
            
            // console.log(crystalValueArr);
            console.log("clicked the crystal");
            console.log(crystalValue);

            //Find a way to assign 4 different values to each crystal
            // crystalValue.attr(crystalValueArr[0]);
            // crystalValueTwo = crystalValueArr[1];
            // crystalValueThree = crystalValueArr[2];
            // crystalValueFour = crystalValueArr[3];

            }
        }

        });
    }

    function winCounter() { //Counts user wins if user is able to match their number to the computer number

        if (yourNumber === chosenNumber) {

            winCounter = 0;
            winCounter++;

        }

    }

    function lossCounter() { //Counts user loss if user goes over the computer number.

        if (yourNumber > chosenNumber) {

            lossCounter = 0;
            lossCounter++;

        }

    }

    initializeGame(); //Starts game when page loads.
    
});    
