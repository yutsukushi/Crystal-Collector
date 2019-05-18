// Variables

var chosenNumber = $(".chosenNumber");
var winCounter = 0;
var lossCounter = 0;
var yourNumber = 0;
var compNumber = [Math.floor(Math.random() * 120) + 19];

var crystalValueArr;
var crystalValueOne = $("#crystalValue");
var crystalValueTwo = $("#crystalValueTwo"); //crystalValueArr[1];
var crystalValueThree = $("#crystalValueThree"); //crystalValueArr[2];
var crystalValueFour = $("#crystalValueFour"); //crystalValueArr[3];

$(document).ready(function() { //Checking if the page is ready to load the game.

    function initializeGame() { //Initializing the game on page load.

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
        
        $("#crystalValue").on("click", function() {
                
            $(".yourNumber").html(yourNumber += crystalValueArr[0]);

            winGame();
            loseGame();

        }); 
        
        $("#crystalValueTwo").on("click", function() {

            $(".yourNumber").html(yourNumber += crystalValueArr[1]);

            winGame();
            loseGame();

        }); 

        $("#crystalValueThree").on("click", function() {

            $(".yourNumber").html(yourNumber += crystalValueArr[2]);

            winGame();
            loseGame();

        }); 

        $("#crystalValueFour").on("click", function() {

            $(".yourNumber").html(yourNumber += crystalValueArr[3]);

            winGame();
            loseGame();
            
        }); 
        
        
    }

    //TODO: add win/loss counter if user hits or goes over comp number
    
    // function wlCounter() { //Counts user wins if user is able to match their number to the computer number

    //     // if user number is equal to the random generated number
    //     // increment winCounter by 1
    //     // display on screen
    //     // restart game

    //     // if user number is greater than or equal to the random generated number
    //     // increment lossCounter by 1
    //     // display on screen
    //     // restart game
        
    //     // if (yourNumber === compNumber) { //if user number is equal to random generated number

    //     //     winCounter++; // increement win counter by 1, if condition is met.

    //     //     $(".winCounter").html("Wins: " + winCounter); //display number of wins on HTML 

    //         // initializeGame(); //re-initialize game
            
    //     // } else if (yourNumber > compNumber) { //if user number is greater than or equal to random generated number

    //     //     lossCounter++; //increase loss counter by 1

    //     //     $(".lossCounter").html("Losses: " + lossCounter); //display loss counter on HTML

    //     //     // initializeGame(); // re-initialize game

    //     // }

    //     console.log(compNumber);
    //     console.log(yourNumber);
    //     console.log(winCounter);
    //     console.log(lossCounter);
    // }

    function winGame() {

        if (yourNumber === compNumber) { //if user number is equal to random generated number ---------- this isn't registering wins, but losses are registering?

            winCounter++; // increement win counter by 1, if condition is met.

            $(".winCounter").html("Wins: " + winCounter); //display number of wins on HTML 

            initializeGame();
        }

    }

    function loseGame() {

        if (yourNumber > compNumber) {

            lossCounter++;

            $(".lossCounter").html("Losses: " + lossCounter);

            initializeGame();
        }

    }

    initializeGame(); //Starts game when page loads.
    
});
