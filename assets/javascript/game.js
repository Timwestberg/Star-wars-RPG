


$(document).ready(function () {

// Character objects

let characters = {


 "obiWan": {
    hitPoints: 400,
    attackPower: 8,
    counterPower: 25,
},

 "darthMaul": {
    hitPoints: 600,
    attackPower: 7,
    counterPower: 20,
},

"lukeSkywalker": {
    hitPoints: 700,
    attackPower: 5,
    counterPower: 15,
},

"darthVader": {
    hitPoints: 800,
    attackPower: 9,
    counterPower: 30,      
}

};

console.log(characters)
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

$("#kenobiPower").text(obiWan.hitPoints);
$("#maulPower").text(darthMaul.hitPoints);
$("#lukePower").text(lukeSkywalker.hitPoints);
$("#vaderPower").text(darthVader.hitPoints);

// function for determining attack power

function atkPower(obj) {
    let y = 1
    atkpower = obj.attackPower * y
    obj.attackPower = atkPower
    y++
};



let renderOne = function(character, renderArea ) {
const obi = document.getElementById("obi-wan");
const maul = document.getElementById("darth-maul");
const luke = document.getElementById("luke-skywalker");
const vader = document.getElementById("darth-vader");
  

};
// start of character render
let renderChar = function(charObj, areaRender) {
    if(areaRender ==="#character-sel") {
        $(areaRender).empty()
    
    for(var key in charObj) {
        if(character.Obj.hasownproperty(key)) {
            renderOne(charObj[key], areaRender);
             }
        }
    }
};
// end of renderChar

});
