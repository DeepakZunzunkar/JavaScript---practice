// declaring varible is nothing but defining the memory for a keyword and it' value 
const userId=123;
let userEmail="test@gmail.com";
var userCity="chandrapur";

userState="Maharashtra";
let password;

// varible const can not be overwrite 
// userId=456;  // not allowed , will give error after compile

// variable which can overwritten has two types i.e let and var but there is 
// difference i.e scope 
// avoid using var keyword  as it raise issue in block scope and functional scope

userEmail = "dzone@gmail.com";
userCity = "Noida";
userState ="UP"

console.log(userId);
console.table([userId,userEmail,userCity,userState,password]);
