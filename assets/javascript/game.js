


$(document).ready(function () {

// Character objects

let characters = {


 "obiWan": {
    hitPoints: 400,
    attackPower: 8,
    powerCl: "#kenobiPower",
    counterPower: 25,
    imageURl: "assets/images/Obi-Wan",
    name: "Obi-Wan Kenobi",
    nameCl: "#vader-n"
},

 "darthMaul": {
    hitPoints: 600,
    attackPower: 7,
    powerCl: "#maulPower",
    counterPower: 20,
    imageURl: "assets/images/Darth Maul.jpg",
    name: "Darth Maul",
    nameCl: "#vader-n"
},

"lukeSkywalker": {
    hitPoints: 700,
    attackPower: 5,
    powerCl: "#lukePower",
    counterPower: 15,
    imageURl: "assets/images/Luke-skywalker.png",
    name: "Luke Skywalker",
    nameCl: "#vader-n"
},

"darthVader": {
    hitPoints: 800,
    attackPower: 9,
    powerCl: "#vaderPower",
    counterPower: 30,    
    imageURl: "assets/images/Darth-Vader",
    name: "Darth Vader",
    nameCl: "#vader-n"
}

};

console.log(characters.name)
// let atk = $("#atkButton").on("click", obiWan.atkPower());
// console.log(atk);

// atkPower(obiWan)

// Defining character cards to easily move around

const obi = document.getElementById("obi-wan");
const maul = document.getElementById("darth-maul");
const luke = document.getElementById("luke-skywalker");
const vader = document.getElementById("darth-vader");

// Parameterized view of character cards with all css already applied, easy to move entire card

const character = [obi, maul, luke, vader];

// Relfecting the hitpoints to the game

$("#kenobiPower").text(characters.obiWan.hitPoints);
$("#maulPower").text(characters.darthMaul.hitPoints);
$("#lukePower").text(characters.lukeSkywalker.hitPoints);
$("#vaderPower").text(characters.darthVader.hitPoints);

// function for determining attack power

function atkPower(obj) {
    let y = 1
    atkpower = obj.attackPower * y
    obj.attackPower = atkPower
    y++
};



let renderOne = function(character, renderArea ) {

let charDiv = $("<div class='character-card' data-name='"+character.name+"'>");
let charName = $("<div id='"+character.nameCl+"'>").text(character.name);
let charImage = $("<img class='character-img'  class='img-fluid' alt='Responsive image'>").attr("src", character.imageURl);
let charHealth = $("<div id='"+character.powerCl+"'>").text(character.health);
charDiv.append(charName).append(charHealth).append(charImage);
$(renderArea),append(charDiv);


  

};
// start of character render
let renderChar = function(charObj, areaRender) {
    if(areaRender ==="#character-sel") {
        $(areaRender).empty()
    
    for(var key in charObj) {
        if(charObj.hasOwnProperty(key)) {
            renderOne(charObj[key], areaRender);
             }
        }
    }
};
// end of renderChar

renderChar(characters, "#character-sel");

});
