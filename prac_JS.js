// practice javascript file

// Javascript Functions Challenge
// Write functions of your own to:



// Subtract two numbers
function minus(numOne, numTwo){
  return numOne-numTwo;
}

// Multiply two numbers
function multiply(numOne, numTwo){
  return numOne*numTwo;
}

// Divide two numbers
function divide(numOne, numTwo){
  return numOne/numTwo;
}

// Take somebody's name and say a greeting to them.
// Hint: prompt the user for their name, store it in a variable, then use alert them with a greeting.
function greet() {
  var name = prompt("what's your name?");
  alert("hello " + name);
}


// Write a function that reverses a string character by character; so reverseCharAt("hello", 0) returns "o" and reverseCharAt("hello", 4) returns "h".
// Hint use .length and .charAt() and some clever arithmatic.


//var string = "hello";

function reverseString(string, num) {

  var nick = string.length - num - 1;
  return string.charAt(nick);

}


reverseString("hello", 3);








// Add, subtract, multiply, and divide some numbers.
// Find the remainder of dividing two numbers by using the modulo operator.
// Divide a number by 0.
// Divide 0 by 0.


// Here are a few exercises for you to practice using variables:
//
// Set a variable called favoriteNumber equal to your favorite number.
// Calculate what your favorite number divided by 2 is.
// Set another variable called someonesFavorite equal to 13.
// Change the value of someonesFavorite to 7.
// Subtract your favorite number from mine.
// Change the value of my favorite number to be 26 times its current value.


// Make a C to F and F to C temperature converter based on the steps here:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output something like: "xC is xF".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output something like: "xF is xC."
//
