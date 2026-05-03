// declaring variables 

let count = 0;
let colors = ["Green", "Blue", "Red", "Yellow"]; 
let colorCount=0;
let mood="neutral";

// reusable functions

function makeImage( colorToMatch ) { 
    // what the function actually does
    if ( colors[colorCount]== colorToMatch ) {
        $("body").append("<img width=100 src='"+colorToMatch+".png'>");
    }
} 

function paintPage( colorToPaint ) {
  $("body").css("background-color", colorToPaint);
}

// what happens when the orchid image is clicked

$("#Green").click(function () { 
   console.log("Green is clicked");
   paintPage( "Green" );
});
$("#Blue").click(function () { 
   console.log("Blue is clicked");
   paintPage( "Blue" );
});
$("#Red").click(function () { 
   console.log("Red is clicked");
   paintPage( "Red" );
});

// what happens when the main button is clicked

$("#needy-button").click(function () { 
 
count = count + 1;


console.log("color count "+colorCount);

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );

  paintPage( colors[colorCount] );
   


   if (colors[colorCount] == "Red") { 
        $("#needy-button").after(" notRed ");
    }
    else if (colors[colorCount] == "Green") {
            $("#needy-button").after("  hey Green ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }

    if (count < 5) { mood="fresh and happy"; }
    else if ( count >= 5 && count < 10) {mood="keep pushing";}
    else { mood="so tired";}

    makeImage("Green");
    makeImage("Blue");
    makeImage("Red");

    colorCount=colorCount+1;
   
    if (colorCount==4) { 
        colorCount=0;  
        console.log("it happened");
    }

    console.log(mood);

});