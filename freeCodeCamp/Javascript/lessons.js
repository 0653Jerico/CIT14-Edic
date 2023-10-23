// This is an in-line comment
/* This 
    is
    a
    multi-line
    comment
*/

// Declaring a variable
var myName = 10;

// Assigning a variable's value to another variable
var a = 10;
var b;
var b = a;

// Creating a variable with a value of a string
var myFirstName = "Jerico Jones";
var myLastName = "Edic";

// Initializing uninitialized variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
/* Output
6
15
I am a String
*/

// 

// Case sensitivity in Variables
/* Wrong = var STUDLY; or Studlycase; or StuDlyCaSE;
Correct = var studly; or studlyCase;
*/

/* Using the keyword let instead of var will allow
the variable value to be detected as an error when 
duplicated */ 

/* Using the keyword var when giving a value can be 
duplicated and will not return as an error */

/* The keyword const is almost similar to let but 
variables declared using const are read-only. They are
constant value, which means that once a variable is assigned
with const, it cannot be reassigned. */

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Operations in js
const sum = 10 + 10;
const diff = 10 - 10;
const multiply = 10 * 10;
const div = 10/10;

// Incrementation
let myInt = 10;
myInt++;
// Decrementation
myInt--;
// Decimal Numbers *calculations can also be used
const myNum = 1.1;

