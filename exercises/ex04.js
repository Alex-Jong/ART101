let count = 0;
let colors= ["Green", "Blue", "Red", "Yellow"];
let colorCount;

let pencil={color: "Purple", isSharp: false,};

$("#needy-button").click(function() {

    count = count +1;

    colorCount=count-1;
    
    $("#needy-button").html("You increased your larp meter by " + count + " times" +  " " +  colors[colorCount] );

    $("#needy-button").css ("background-color", colors[colorCount]);

    $("html").css("background-color", colors[colorCount+ 1]);

    console.log(pencil.color);

});