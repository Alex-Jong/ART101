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