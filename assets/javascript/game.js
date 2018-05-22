$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    var num1 = Math.ceil(Math.random() * 12)
    var num2 = Math.ceil(Math.random() * 12)
    var num3 = Math.ceil(Math.random() * 12)
    var num4 = Math.ceil(Math.random() * 12)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //  Decaring variables for tallies
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //resets the game
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.ceil(Math.random() * 12);
        num2 = Math.ceil(Math.random() * 12);
        num3 = Math.ceil(Math.random() * 12);
        num4 = Math.ceil(Math.random() * 12);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }
    //adds wins to the userTotal
    function victor() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //adds losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
    //sets up click for jewels
    $('#one').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //sets win/lose conditions
        if (userTotal == Random) {
            victor();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#two').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            victor();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#three').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //sets win/lose conditions
        if (userTotal == Random) {
            victor();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#four').on('click', function () {
        userTotal = userTotal + num4;        
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random) {
            victor();
        }
        else if (userTotal > Random) {
            loser();
        }
    });
}); 