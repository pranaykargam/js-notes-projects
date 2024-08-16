// if
const isUserLoggedIn = true
const temperature = 41

if(temperature === 41) {
    console.log ("less than 50");
}
console.log ("temperature is greater than 50");

  // <, >, <=, >=, ==, !=, ===, !==

  const score = 200

  if(score > 100) {
    const  power = "fly"               // we have to use only "const","let" {we dont wanna use var}
    console.log(`User power: ${power}`);
  }
//   console.log(`User power: ${power}`);


const balance = 1000
 
if (balance > 500) console.log("test"), console.log("test2")
// we dont wanna write side by side and also line by line {have to write only in a single line}


const UserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitcard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle  || loggedInFromEmail ) {
console.log("user logged in");
}






