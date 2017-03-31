// Javascript Password Checker Challenge
// Goal
//
// You are writing the user registration page for a secure web site.
// On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:
//
// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Implement functions to perform the checks.
// Then:
//
// Write a main method that
//
// First lets a user input both user ID and password,
// Then create methods corresponding to criteria above to evaluate the user ID and password
// Then output whether the combination the combination is acceptable or not.
// Run the program and test it for all criteria listed above by inputting different values.
// Hint: See how the javascript String class can help you.


//
// makes sure both userid and passwords pass the tests
// verify user id and password functions:
function isUserIdValid(userID) {
  return userID.length >= 6 && !userID.includes("#") && !userID.includes("$") && !userID.includes("!")
}
function isPasswordValid(passcode) {
  return passcode.length >= 6  && passcode.toUpperCase() != passcode && passcode.toLowerCase() != passcode && passcode!=("password") && (passcode.includes("#") || passcode.includes("$")  ||  passcode.includes("!"))
}
function checkCred(user, password) {
  return isUserIdValid(user) && isPasswordValid(password);
}
//
function userRegistration() {
  var username = prompt("Wah yo name?");
  var pass = prompt("Create yo secret code");
    if (checkCred(username, pass)===false){
      alert("Entrance Denied")
    }
  else {
    alert("welcome " + username)}
}




// if (y.search[/a-z/i] < 1) {
//     alert("Your password needs a lower case letter")
// }
// if (y.search[/A-Z/i] < 1) {
//     alert("Your password needs an uppser case letter")
// }


 // && passcode!=("password")








//
