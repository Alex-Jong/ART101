let count = 0;
$("#needy-button").click(function() {
    count = count + 3;
    $("#needy-button").html("You increased your 50/50 luck by " + count + " times"); 
});