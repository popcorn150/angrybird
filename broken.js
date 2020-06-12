// Example of a broken JavaScript program
console.log("Hello, World!"
// This code sample is missing the closing parenthesis, 
// and instead of printing the expected “Hello, World!” to the console, 
// the following error will appear: 

// Consider the following three examples of variable assignment. 
const greeting="Hello";         // no whitespace between variable & string
const greeting =       "Hello"; // excessive whitespace after assignment
const greeting = "Hello";       // single whitespace between variable & string

// Whitespace
const userLocation      =    "New York City, "     +  "NY";
const userLocation="New York City, "+"NY";
const userLocation = "New York City, " + "NY";

const companyName         = "DigitalOcean";
const companyHeadquarters = "New York City";
const companyHandle       = "digitalocean";

//Parentheses
// An example of if statement syntax
if () { }

// Check math equation and print a string to the console
if (4 < 5) {
    console.log("4 is less than 5.");
}

// An example of for loop syntax
for () { }

// Iterate 10 times, printing out each iteration number to the console
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// When the code pertains to a function, method or class, 
// the parentheses will be touching the respective name


// An example of if statement syntax
if () { }

// Check math equation and print a string to the console
if (4 < 5) {
    console.log("4 is less than 5.");
}

// An example of for loop syntax
for () { }

// Iterate 10 times, printing out each iteration number to the console
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Semicolons
// A single JavaScript statement
const now = new Date();

//If two or more statements are next to each other, 
//it is obligatory to separate them with a semicolon.
// Get the current timestamp and print it to the console
const now = new Date(); console.log(now);

//If statements are separated by a newline, the semicolon is optional.
// Two statements separated by newlines
const now = new Date()
console.log(now)

// Two statements separated by newlines and semicolons
const now = new Date();
console.log(now);

// Semicolons are also required between the initialization, 
// condition, and increment or decrement of a for loop.
for (initialization; condition; increment) {
  // run the loop
}

// Initialize a function to calculate the area of a square
function square(number) {
  return Math.pow(number, 2);
}

// Calculate the area of a number greater than 0
if (number > 0) {
  square(number);
}

// An example object
const objectName = {};

// Initialize triangle object
const triangle = {
    type: "right",
    angle: 90,
    sides: 3,
};

// Indentation
// Conditional statement written on one line
if (x === 1) { /* execute code if true */ } else { /* execute code if false */ }

// Conditional statement with indentation
if (x === 1) {
    // execute code if true
} else {
    // execute code if false
}

// Conditional statement with braces on newlines
if (x === 1)
{
    // execute code if true
}
else
{
    // execute code if false
}

// Initialize a function
function isEqualToOne(x) {
  // Check if x is equal to one
  if (x === 1) {
      // on success, return true
      return true;
  } else {
    return false;
  }
}

// Case Sensitive
var myVariable = 1;
var myvariable = 2;

// Initialize a class
class ExampleClass {
  constructor() { }
}