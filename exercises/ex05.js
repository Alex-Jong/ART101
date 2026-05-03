let count = 0;
let colors = ["Green", "Blue", "Red", "Yellow"]; 
let colorCounter=0;
let mood = "neutral";

$("#needy-button").click(function () { 
 
count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
   
   if (colorCounter==4) { 
        colorCounter=0;  
        console.log("it happened");
    }

   if (colors[colorCount] == "Red") { 
        $("#needy-button").after(" notRed ");
    }
    else if (colors[colorCount] == "Green") {
            $("#needy-button").after("  hey  ");
    }
    else {
      $("#needy-button").after(" all other colors ");
    }

    if (count < 5) { mood = " fresh and happy "; }
    else if (count >= 5 && count < 10) { mood = " keep pushing "; }
    else { mood = " so tired! "; }

    console.log(mood);

});