// Primitive
// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const BigNumber = 3245674322n

// Reference(Non Primitive)
// Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"]

let myObj = {
    name : "Yash",
    age : 20,
}

const myFunction = function(){
    console.log("Hello js")
}

console.log(typeof myFunction)

// Study Link : https://262.ecma-international.org/#sec-typeof-operator