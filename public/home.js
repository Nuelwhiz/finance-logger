"use strict";
//FUNCTION
let grate = (a, b) => {
    return a + b;
};
//console.log(grate("ggg", 7));
//console.log(grate(7, 5));
let resul = grate(8, 10);
console.log(resul);
let greate;
greate = (c, g) => {
    return c + g;
};
//console.log(greate("umi ", false))
let opeb = greate("hui", 8);
console.log(opeb);
//FUNCTION UNION
let greeting;
greeting = () => {
    //console.log("hello");
};
const add = (a, b) => {
    //console.log(a + b);
};
add(2, 9);
const ad = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
//ad(2, 10, "hello");
//ad(2, 10, 40);
const minus = (a, b) => {
    return a + b;
};
let outCome = minus(5, 15);
console.log(outCome);
let logDetail = (uid) => {
    console.log(` i am ready for my  ${uid} birthday`);
};
//logDetail(true);
logDetail(20);
//10 void function
let getEl;
getEl = (name, surnName) => {
    console.log(`${name} says his last name is ${surnName}`);
};
getEl("emmanuel", "Asogwa");
//
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "open") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//
let logParams;
logParams = (userProfile) => {
    console.log(`my name is ${userProfile.user} and i am ${userProfile.age} years old`);
};
//# sourceMappingURL=home.js.map