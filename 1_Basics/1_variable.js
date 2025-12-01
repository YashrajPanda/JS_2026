const accountId = 123456;
let accountname = "Yashraj";
var accountpassword = "12345";
accountcity = "Janka";
let accountstate; // undefined

// accountId = 654321; Not allowed as const variable

/*
Prefer not to use var, use let and const instead.
Because var is function scoped and may create confusion in block scope.
*/
console.log(accountId);
console.log(accountcity);

console.table({accountId, accountname, accountpassword, accountcity, accountstate});