//FUNCTION
let grate = (a: number, b: number) => {
  return a + b;
};
//console.log(grate("ggg", 7));
//console.log(grate(7, 5));
let resul = grate(8, 10);
console.log(resul);

let greate: Function;
greate = (c: string, g: boolean) => {
  return c + g;
};
//console.log(greate("umi ", false))
let opeb = greate("hui", 8);
console.log(opeb);

//FUNCTION UNION

let greeting: Function;
greeting = () => {
  //console.log("hello");
};

const add = (a: number, b: number) => {
  //console.log(a + b);
};
add(2, 9);

const ad = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};
//ad(2, 10, "hello");
//ad(2, 10, 40);

const minus = (a: number, b: number) => {
  return a + b;
};
let outCome = minus(5, 15);
console.log(outCome);

//making function type
type stringOrNum = string | number;
let logDetail = (uid: stringOrNum) => {
  console.log(` i am ready for my  ${uid} birthday`);
};
//logDetail(true);
logDetail(20);

//10 void function
let getEl: (a: string, b: string) => void;
getEl = (name: string, surnName: string) => {
  console.log(`${name} says his last name is ${surnName}`);
};
getEl("emmanuel", "Asogwa");

//
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "open") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

//
let logParams: (obj: { user: string; age: number }) => void;
type profile = { user: string; age: number };
logParams = (userProfile: profile) => {
  console.log(
    `my name is ${userProfile.user} and i am ${userProfile.age} years old`,
  );
};

