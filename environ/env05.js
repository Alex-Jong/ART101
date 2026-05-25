let count = 0;
let count1 = 0;

let EnvironmentTitle = {
    title: "The Daily life of a UCSC Student",
    description: "Today is bright, sunny, and lukewarm weather"
};

let Steps = {
    Title: "How many steps have you put in today?",
    Stepping: "Steps: "
}

let AnimalTypes = {
    TitleAnimal: "The Types of Animals you will see on campus",
    Deer: "quite passive but would not get close to",
    Rooster: "quite passive but would leave alone",
    BannanaSlugs: "watch out where you step!",
    Spiders: "if they get close just leave them alone and let them be",
    Ants: "make sure to throw your foods and drinks outside to avoid them!"
}

let Dangers = {
    Title3: "The Everyday Dangers Around us",
    Rain: "can make everything slippery",
    Dirt: "slipping in mud is terrible",
    Allergies: "beware of allergies relating to pollen or nature as it is everywhere",
    Cars: "make sure to look both ways"

}

let environmentElements = ["(location 1/4) Trees", "(location 2/4) Stairs", "(location 3/4) Grass", "(location 4/4) Buildings"];

let MainCharacter = {
    name: "Bob",
    looks: "handsome",
    mood: "in awe",
    isCool: true,
    locations: environmentElements[1]
};

$("#needy-button1").click(function () {

    let message1 = "<h1> " + EnvironmentTitle.title + " </h1>";
    message1 = message1 + "<p> " + EnvironmentTitle.description + ".</p>";

    $("#environ-read").html(message1);

});

$("#needy-button2").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentLocation = environmentElements[arrayPosition];

    let message2 = "<h1>Name is " + MainCharacter.name + ".</h1>";
    message2 = message2 + "<p>Character's mood is " + MainCharacter.mood + ".</p>";
    message2 = message2 + "<p>My characters looks is being " + MainCharacter.looks + ".</p>";
    message2 = message2 + "<p>My character being cool is " + MainCharacter.isCool + ".</p>";
    message2 = message2 + "<p>Characters current location is " + currentLocation + ".</p>";

    if (count==4) { 
        count=0;
    }

    $("#environ-read").html(message2);

});

$("#needy-button3").click(function () {

    let message3 = "<h1> " + AnimalTypes.TitleAnimal + ".</h1>";
    message3 = message3 + "<p>Watch out for Deer as they are " + AnimalTypes.Deer + ".</p>";
    message3 = message3 + "<p>Roosters are " + AnimalTypes.Rooster + ".</p>";
    message3 = message3 + "<p>For Bannana Slugs " + AnimalTypes.BannanaSlugs + ".</p>";
    message3 = message3 + "<p>For Spiders " + AnimalTypes.Spiders + ".</p>";
    message3 = message3 + "<p>For Ants " + AnimalTypes.Ants + ".</p>";

    $("#environ-read").html(message3);
});

$("#needy-button4").click(function () {

    let message4 = "<h1> " + Dangers.Title3 + ".</h1>";
    message4 = message4 + "<p>Watch out for Rain as it " + Dangers.Rain + ".</p>";
    message4 = message4 + "<p>Watch out for Mud as " + Dangers.Dirt + ".</p>";
    message4 = message4 + "<p>Also " + Dangers.Allergies + ".</p>";
    message4 = message4 + "<p>Before crossing the road " + Dangers.Cars + ".</p>";

    $("#environ-read").html(message4);
});

$("#needy-button5").click(function () {

    count1 = count1 + 1;

    let message5 = "<h1> " + Steps.Title + "</h1>";
    messages5 = message5 + "<p> " + Steps.Stepping + ".</p>";

    $("#environ-read").html(message5 + count1 + " steps ");
    
});

function askPlace() {
    
    // Changed prompt question to make it more clear on what to type
    let userPlace = prompt("Where do you want to go? Choose Wisely... Night time walk or Day time walk? Type exactly how it is spelled out");

    if (userPlace == "Day time walk") {
        $("body").css("background-image", 'url(day.jpg');
        $(".top").hide();
        $("#yo").hide();
        $(".main").hide();
        $("#asker").css("top", '150px');
        $(".environment-output").hide();
        $("#output").html("Good Ending...");
    }
    
    else if (userPlace == "Night time walk") {
        
        $("body").css("background-image", 'url(night.jpg');
        $(".top").hide();
        $("#yo").hide();
        $(".main").hide();
        $("#asker").css("top", '150px');
        $(".environment-output").hide();
        $("#output").html("Bad Ending...");
    }
    
    else {
        $("body").css("background-image", 'url(downtown.jpg');
        $(".top").hide();
        $("#yo").hide();
        $(".main").hide();
        $("#yo").hide();
        $("#asker").css("top", '150px');
        $(".environment-output").hide();
        $("#output").html("Um we got lost...?");
    }
}

let following = false;

$("#door").click(function () {
    askPlace();
});

$("#door").hover(
  function () {
    $("#asker").stop(true, true).slideDown(300);
    $("#status").text("Are you sure you want to open the door?.");
  },
  function () {
    $("#asker").stop(true, true).slideUp(300);
    $("#status").text("Open the door?.");
  }
);

$(document).mousemove(function (event) {
  if (following === true) {
    $("#bruh").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});

$("#yo").dblclick(function() {
    $("#yah").text("It's sure as sunnny today!");
})

$("#yo").hover(
  function () {
    $("#nom").stop(true, true).slideDown(300);
    $("yah").text("Want to find out the temperature?.");
  },
   function () {
    $("#nom").stop(true, true).slideUp(300);
    $("#yah").text("Double click to find out.");
  }
);

$(document).mousemove(function (event) {
  if (following === true) {
    $("#yo").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});

function ask() {
    
    let user = prompt("Are you sure? [Y/N]");

    if (user == "Y") {
        $("body").css("background-image", 'url(Irontomb.webp');
        $(".top").hide();
        $("#yo").hide();
        $(".main").hide();
        $("#door").hide();
        $("#status").hide();
        $("#output").hide();
        $("#bruh").hide();
        $(".environment-output").hide();
        $("#boss").show();
        $("#box").show();
        $(".choose").show();
        $(".pick").show();
        $(".cyrene").show();
        $("#answer").show();
    }
}

$("#dorb").click(function () {
    ask();
});

function ret() {
        $("body").css("background-image", 'url(quarry.webp');
        $(".top").show();
        $("#yo").show();
        $(".main").show();
        $("#door").show();
        $("#status").show();
        $("#output").show();
        $("#bruh").show();
        $(".environment-output").show();
        $("#asker").css("top", '600px');
}

$("#return").click(function () {
    ret();
});

$("#fight").click(function(){

    //let atk = {wow: "You attacked Irontomb"};

    //let attk = "<p> " + atk.wow + ".</p>";

    //let de = {lol: "You defeated Irontomb"};

    //let feet = "<p> " + de.lol + ".</p>";

    // Removed the extra coding above and made it more simple below

    $("#answer").html("You attacked Irontomb and defeated him!");
    $("#hit").delay("fast").fadeIn();
    $("#hit").animate({height: "300px"}, "fast");
    $("#hit").animate({width: "150px"}, "fast");
    $("#hit").animate({height: "100px"}, "fast");
    $("#hit").animate({width: "300px"}, "fast");
    $("#hit").animate({height: "0px"}, "fast");
    $("#hit").animate({width: "0px"}, "fast");
    //$("#answer").dequeue();
    //$("#answer").html(feet);
    $("#hit").delay("slow").fadeOut();
    $("#boss").delay("slow").fadeOut();
    $("#box").delay("slow").fadeOut();
    //fixed issue of hit box not dissapearing after attack by using a series of delays, fadeIn, and FadeOut
});

$("#act").click(function(){
    
    let aks = prompt("Options: [Ask] Trailblazer for help / [Feed] Irontomb the UCSC Dining hall Allergen Free Halal Chicken Thigh from your inventory / [Try] to go back?");

    if (aks == "Ask") {
        $("#answer").html("Trailblazer looks at you in confusion?");
    }
    
    else if (aks == "Feed") {
        $("#answer").html("Irontomb grunts reluctantly after having to eat the chicken");
    }
    
    else {
        $("answer").html("Um no you can't get out lol");
    }
});

$("#item").click(function(){
    //let um = {THE: '<img src= "chicken.jpg">' + "You didn't bring anything with you but dining hall chicken.... You can't really eat it now..."};

    //let erm = "<p> " + um.THE + ".</p>";

    // Removed extra coding above and made it more simple below

    $("#answer").html('<img src="chicken.jpg">' + "You didn't bring anything with you but dining hall chicken.... You can't really eat it now...");
});

$("#mercy").click(function(){
    $("#hit").hide();
    $("#boss").hide();
    $("#box").hide();
    $(".choose").hide();
    $(".pick").hide();
    $(".cyrene").hide();
    $("#answer").hide();
    $("body").css("background-image", 'url(Irontomb.gif');
});

$("#hit").hide();
$("#boss").hide();
$("#box").hide();
$(".choose").hide();
$(".pick").hide();
$(".cyrene").hide();
$("#answer").hide();