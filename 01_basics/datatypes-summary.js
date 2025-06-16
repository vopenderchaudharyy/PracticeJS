// primitive

// 7 types: string(call by value), number, boolean (true/false), null(empty), undefined(value is not defined), symbol, BigInt(scientific value)

// javascript is dynamic or static? in java script we don't define language
// typescript is considered as cousin brother of javascript

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1323456765645n



// Reference (non primitve)
// array, object, functions
// node 01_basics/datatypes-summary.js

const heros = ("shaktiman","superman","satna");

let myobj = {
    name: "hitesh",
    age: 23,
}

const myfunction = function(){
    console.log("hellow world");
}

console.log(typeof anotherId);

//++++++++++++++++Memory++++++++++

// stack(primitive),  heap (non-primitive)

let myYoutubename = "Vopenderchaudhary"

let anothername = myYoutubename
anothername = "thevlogger"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
   email: "uder@google.com",
   upi: "usesr@ybl"
}

let userTwo = userOne

userTwo.email = "vopenderchaudhary@gmial.com"

console.log(userOne.email);
console.log(userTwo.email);


