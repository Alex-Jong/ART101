function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("Yuh uh you got it right bro");
    }
    else {
        $("#output").html("nuh uh you got it wrong bro");
    }
}

$("#good-button").click(function () {
    askNumber(8);
});