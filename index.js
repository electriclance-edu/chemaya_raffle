// const Srand = require("./rand");
// SEED RNG GENERATOR. This seed is fixed and ensures the same results through all trials of RNG.
Srand.seed(3103) // from our res code, R3-Y1-03

// Declare all testers, possible winners
var testers = [
    "DELARAMA, Katrina Isabelle P.",
    "LOZADA, Luc G.",
    "CONSUL, Jared Cedric B.",
    "NORCIO, Ethan Anilov T.",
    "EVIDENTE, Ea Sareena P.",
    "SESANTE, Pamela Gail P.",
    "SALES, Julianne Earl R.",
    "EIJANSANTOS-CALDERON, Talan Marco R.",
    "DE VEYRA, Zsaneah Patriz H.",
    "LIM, Gef Eigen S.",
    "DELA CRUZ, John Daniel R.",
    "Luis, Breindel Sam T.",
    "AP-APID, Athena Cleo DG.",
    "BEREBER, Paris Miguel U.",
    "PALACOL, Raissa Bernice E.",
    "MINGUEZ, Rica Elaine B.",
    // MULSID, Amber Therese B. // Did not show up
    "FABULA, Sofia N.",
    "ORONCE, Ramiel Gideon F.",
    "GANANCIAL, Princess Carleen Y.",
    "SALVADOR, Enrico Miguel N.",
]
var testerCodes = [
    "BT-C01",
    "BT-C04",
    "BT-C03",
    "BT-P04",
    "BT-P01",
    "BT-C06",
    "BT-P05",
    "BT-C08",
    "BT-C09",
    "BT-C10",
    "BT-C05",
    "BT-P03",
    "BT-C02",
    "BT-C07",
    "BT-P06",
    "BT-P07",
    // MULSID, Amber Therese B. // Did not show up
    "BT-P09",
    "BT-P10",
    "BT-P11",
    "BT-P12",
]
// Converting testers into objects so they can hold more properties
testers.forEach((tester, i) => {
    testers[i] = {name:tester,code:testerCodes[i]};
})


// ----------------------------------
// Calculate winners of grand prizes.
// ----------------------------------

// Generate a random number for every tester.
testers.forEach((tester) => {
    tester.grandPrizeStraw = Srand.random()
});
// Sort the list based on the generated random numbers.
testers.sort((a, b) => (b.grandPrizeStraw - a.grandPrizeStraw));
// Take the top 2 of the list. Remove those two winners. (No double winners :))
let grandPrizeWinners = testers.splice(0,2);

console.log("--------------------------------");
console.log("GRAND PRIZE WINNERS:");
console.log("     ",grandPrizeWinners[0].name);
console.log("     ",grandPrizeWinners[1].name);


// ----------------------------------
// Calculate winners of minor prizes.
// ----------------------------------

// Generate a random number for every tester. 
testers.forEach((tester) => {
    tester.minorPrizeStraw = Srand.random()
});
// Sort the list based on the generated random numbers.
testers.sort((a, b) => (b.minorPrizeStraw - a.minorPrizeStraw));
// Take the top 15 of that list.
let minorPrizeWinners = testers.splice(0,10);
minorPrizeWinners.sort((a,b)=>{
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
}); // Alphabetically sort

console.log("--------------------------------");
console.log("MINOR PRIZE WINNERS:");
minorPrizeWinners.forEach((winner) => {
    console.log("     ",winner.name);
});


// --------------
// Output winners
// --------------

function onload() {
    // Load names once HTML loads.
    
    let grandDisplay = document.getElementById("grandPrizeWinnersDisplay");
    grandDisplay.innerHTML = "";
    grandPrizeWinners.forEach((winner) => {
        grandDisplay.innerHTML += `${winner.code}<br>`;
    });
    let minorDisplay = document.getElementById("minorPrizeWinnersDisplay");
    minorDisplay.innerHTML = "";
    minorPrizeWinners.forEach((winner) => {
        minorDisplay.innerHTML += `${winner.code}<br>`;
    });
}