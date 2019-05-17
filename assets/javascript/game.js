// // Variables

// var chosenNumber = $(".chosenNumber");
// var winCounter = $(".winCounter");
// var lossCounter = $(".lossCounter");
// var yourNumber = $(".yourNumber");

// var crystalValueArr;
// var crystalValue = $("#crystalValue");
// var crystalValueTwo = $("#crystalValueTwo");
// var crystalValueThree = $("#crystalValueThree");
// var crystalValueFour = $("#crystalValueFour");

// // var crystalValueOne = crystalValueArr[0];
// // // var crystalValueTwo = crystalValueArr[1];
// // // var crystalValueThree = crystalValueArr[2];
// // // var crystalValueFour = crystalValueArr[3];

// $(document).ready(function() { //Checking if the page is ready to load the game.

//     function initializeGame() { //Initializing the game on page load.

//         // Generate random number from 19 - 120 for the computer number.
//         // start user value to 0.
//         // generate random values to each crystal.

//        chosenNumber.text("Match my number: " + [Math.floor(Math.random() * 120) + 19]); //chosen number will be anywhere between 19 - 120.

//         yourNumber.text(0); //displaying user score on start of the game

       
//        assignCrystalValue();
//        userNumber();
//        winCounter();
//        lossCounter();
//     //    return chosenNumber;

//     }


//     function userNumber() { //Being able to add randomly assigned crystal values to the user number

//         // when a crystal is clicked, add value to yourNumber.
//         // yourNumber += crystalValue;

//     }

//     function assignCrystalValue() { //Assigning the crystals different values every time game initiates -----------------------------> ross said we're going to need to use a data function??

//         $(".crystalValue").on("click", function() {
        
//             crystalValueArr = []; //empty crystal value array to push 4 values into

//             //Currently this will only output the same number amongst the 4 crystals.

//             for (var i = 0; i < 4; i++) { //Loops 4 times

//                 var crystalValue = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12
                
//                 if ((crystalValueArr === -1)) {
//                 // || (crystalValueArr <= crystalValueArr[3])

//                 // crystalValue.attr(crystalValueArr[i]);
//                 crystalValueArr.push(crystalValue);
                
//                 // crystalValueArr[1].push(crystalValue);
//                 // crystalValueArr[2].push(crystalValue);
//                 // crystalValueArr[3].push(crystalValue);
                
//                 console.log("clicked the crystal");
//                 console.log(crystalValueArr[i]);

//                 // TODO: Find a way to assign 4 different values to each crystal
                
//                 // crystalValue.attr(crystalValueArr[0]);
//                 // crystalValueTwo = crystalValueArr[1];
//                 // crystalValueThree = crystalValueArr[2];
//                 // crystalValueFour = crystalValueArr[3];

//                 }   
//             }

//         });
//     }

//     function winCounter() { //Counts user wins if user is able to match their number to the computer number

//         // if (yourNumber === chosenNumber) {

//         //     winCounter = 0;
//         //     winCounter++;

//         // }

//     }

//     function lossCounter() { //Counts user loss if user goes over the computer number.

//         // if (yourNumber > chosenNumber) {

//         //     lossCounter = 0;
//         //     lossCounter++;

//         // }

//     }

//     initializeGame(); //Starts game when page loads.
    
// });    

// Variables

var chosenNumber = $(".chosenNumber");
var winCounter = $(".winCounter");
var lossCounter = $(".lossCounter");
// var yourNumber = $(".yourNumber");
var yourNumber = 0;

var crystalValueArr;
var crystalValueOne = $("#crystalValue");
var crystalValueTwo = $("#crystalValueTwo"); //crystalValueArr[1];
var crystalValueThree = $("#crystalValueThree"); //crystalValueArr[2];
var crystalValueFour = $("#crystalValueFour"); //crystalValueArr[3];

$(document).ready(function() { //Checking if the page is ready to load the game.

    function initializeGame() { //Initializing the game on page load.

        // Generate random number from 19 - 120 for the computer number.
        // start user value to 0.
        // generate random values to each crystal.

       chosenNumber.text("Match my number: " + [Math.floor(Math.random() * 120) + 19]); //chosen number will be anywhere between 19 - 120.

        // yourNumber.text(0); //displaying user score on start of the game
       
       crystalValues();
       winCounter();
       lossCounter();
    }

    function crystalValues() { //generating crystal values
        //Currently this will only output the same number amongst the 4 crystals
        
        // $("#crystalValue").on("click", function() {
            crystalValueArr = []; //empty crystal value array to push 4 values into
           
            for (var i = 0; i < 4; i++) { //Loops 4 times

                // generate random crystal number value
                // if array is empty, store random value in a variable array
                // create image array
                // assign crystal value to a crystal image by index
                // append crystal value and image to HTML DOM
                
                
                var crystalValueStat = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12
               
                crystalValueArr.push(crystalValueStat);
                
                console.log("crystal one: " + crystalValueStat);
            }
        // });
            console.log(crystalValueArr);

            $("#crystalValue").on("click", function() {
                
                $(".yourNumber").html(crystalValueStat[0]);
                
            }); 
            
            $("#crystalValueTwo").on("click", function() {
                $(".yourNumber").html(crystalValueStat[0]);
                
            }); 

            $("#crystalValueThree").on("click", function() {

                $(".yourNumber").html(crystalValueStat[0]);
                
            }); 

            $("#crystalValueFour").on("click", function() {

                $(".yourNumber").html(crystalValueStat[0]);
                
            }); 

    }
        // $("#crystalValueTwo").on("click", function() {
            
        //     for (var i = 0; i < 4; i++) { 
                
        //         crystalValueArr = []; //empty crystal value array to push 4 values into
        //         var crystalValueStat = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12
               
        //         // if ((crystalValueArr === -1) || (crystalValueArr <= 3)) {

        //         // crystalValue.attr(crystalValueStat);
        //         // crystalValueArr.append(crystalImg);
                
        //         }

        //         console.log("crystal two: " + crystalValueStat);
        // });

        // $("#crystalValueThree").on("click", function() {
            
        //     for (var i = 0; i < 4; i++) {
                
        //         crystalValueArr = []; //empty crystal value array to push 4 values into
        //         var crystalValueStat = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12
               
        //         // if ((crystalValueArr === -1) || (crystalValueArr <= 3)) {

        //         // crystalValue.attr(crystalValueStat);
        //         // crystalValueArr.append(crystalImg);
                
        //         }

        //         console.log("crystal three: " + crystalValueStat);
        // });

        // $("#crystalValueFour").on("click", function() {
            
        //     for (var i = 0; i < 4; i++) { 
                
        //         crystalValueArr = []; //empty crystal value array to push 4 values into
        //         var crystalValueStat = ([Math.floor(Math.random() * 13) + 1]); //generate random crystal value between 1 - 12
               
        //         // if ((crystalValueArr === -1) || (crystalValueArr <= 3)) {

        //         // crystalValue.attr(crystalValueStat);
        //         // crystalValueArr.append(crystalImg);
                
        //         }

        //         console.log("crystal four: " + crystalValueStat);
        // });
    // } 

        // $("#crystalValue").on("click", function() {

        //     crystalValue.attr(crystalValueStat);
            
        //     // console.log("clicked the crystal");
        //     // console.log(crystalValueStat);

        // });

        // $("#crystalValueTwo").on("click", function() {

        //     crystalValueTwo.attr(crystalValueStat);

        // });

        // $("#crystalValueThree").on("click", function() {

        //     crystalValueThree.attr(crystalValueStat);
            
        // });

        // $("#crystalValueFour").on("click", function() {

        //     crystalValueFour.attr(crystalValueStat);
            
        // });
        
    

    function assignCrystalValue() { //Assigning the crystals different values every time game initiates

    }
    function userNumber() { //Being able to add randomly assigned crystal values to the user number

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
