const name = "Yash"
const repocount = 15

// console.log("Hello " + name + ", your repo count is " + repocount) // outdated way

// console.log(`Hello ${name}, your repo count is ${repocount}`)

// console.log(`The result is : ${2 + 3}`)

// console.log(`Hello ${name.toUpperCase()}, your repo count is ${repocount}`)

// // Multi line string
// console.log(`Hello ${name},
// your repo count is ${repocount}

// Thank you for using our service.`)

const gameName = new String("Cricket")
console.log(typeof gameName)  // object

console.log(gameName[0])
console.log(gameName.__proto__) // Object String Prototype

console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.length)
console.log(gameName.indexOf('c'))  // 4
console.log(gameName.charAt(2)) // i

const newString = gameName.substring(0,4)
console.log(newString)  // Cric

const anotherString = gameName.slice(-6,4)
console.log(anotherString)  // Cric

// trim
const stringWithSpace = "     Hello World     "
console.log(stringWithSpace.trim())
// Study Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


// url replace
let url = "https://www.google.com/search?q=javascript"
console.log(url.replace("search", "images"))

// url includes
console.log(url.includes('google'))

// split
const myName = "Yash Kumar Singh"
const nameParts = myName.split(" ")
console.log(nameParts)  // [ 'Yash', 'Kumar', 'Singh' ]

// Study Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split