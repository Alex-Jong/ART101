let count = 0;

let buttonCreature = {
    name: "Larpy Button",
    species: "Performative creature",
    favoriteFood: "Larps",
    moods: ["Happy", "Angry", "Sad", "Shy", "Bored", "Excited"]
};

$("#larpy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You larped " + count + " times.</p>";
    message = message + "<p>My present mood is " + currentMood + ".</p>";
    message = message + "<p>My title is " + buttonCreature.name + ".</p>";
    message = message + "<p>I therefore am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite sustanance to consume is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});