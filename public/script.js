"use strict";
//types string number boolean
let names = "ham";
let age = 20;
let logic = true;
//console.log(logic);
age = 30;
//console.log(age);
//console.log(names);
//array
//STRING TYPES
let allNames = ["Albert", "Emmanuel", "Basil"];
//allNames.push(20)
//allNames.push(true);
allNames.push("Nonso");
allNames[1] = "dev";
console.log(allNames);
//NUMBER TYPES
let allNumbers = [2, 50, 59, 33];
allNumbers.push(6);
console.log(allNumbers);
//BOOLEAN
//MIXED string&number TYPES
let mixed = [1, "eman", false];
mixed.push(4);
mixed.push("neli");
mixed.push(true);
console.log(mixed);
//object
let allDev = {
    name: "Gabri",
    color: "red",
    age: 20,
};
allDev.name = "Emmanuel";
//allDev.name=20
//allDev.age=true
console.log(allDev);
//function
const circle = (diam) => {
    return diam * Math.PI;
};
//console.log(circle(true));
//console.log(circle("open"));
//console.log(circle(5));
//EXPLICIT SECTION BELLOW/////////
let allMen;
allMen = "man";
console.log(allMen);
let allnums;
//allnums="yoo"
//allnums=true
allnums = 30;
console.log(allnums);
let allLogic;
//allLogic = "true";
//allLogic = 1;
allLogic = true;
console.log(allLogic);
//ARRAY
let allProfie = [];
//allProfie = [1, "manny"];
//allProfie = [true, "manny"];
allProfie = ["eman", "manny"];
console.log(allProfie);
//UNION ARRAY
let allPro = [];
//allPro = ["man", 30, true];
allPro = ["man", 30];
console.log(allPro);
//OBJECT
let allUser;
allUser = { name: "emmanuel", age: 20, user: true };
console.log(allUser);
//ANY TYPE IN TSX -------------
let devAge;
devAge = 25;
//devAge = "harry";
//devAge = { name: "EMMAN", age: 22 };
console.log(devAge);
//Array any
let allArrays = [];
allArrays = ["iman", 3, true];
console.log(allArrays);
//Object any
/* let had = 15555;
console.log(had);
let myName = "emmanuel";
console.log(myName);
 */
//FUNCTION TYPES
let nan = 64;
console.log(nan);
//# sourceMappingURL=script.js.map