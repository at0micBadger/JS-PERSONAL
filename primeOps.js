// JavaScript Operators Demo
// Using primitive datatypes: numbers, strings, booleans

console.log("");
console.log("JAVASCRIPT PRIME OPERATORS DEMO");
console.log("by Dwayne Brock");
console.log("1-24-2026");
console.log("");

// START PROGRAM
console.log("");
console.log("PROGRAM START.");
console.log("");


// VARIABLES WITH PRIMITIVE DATATYPES: DECLARATION AND INITIALIZATION:
let num1 = 10;
let num2 = 3;
let text1 = "Hello";
let text2 = "World";
let isTrue = true;
let isFalse = false;

// ============================================
// ARITHMETIC OPERATORS
// ============================================

console.log("STANDARD MATHEMATICS OPERATORS:");
// ADDITION OPERATOR
let sum = num1 + num2;
console.log("\tAddition:", num1, "+", num2, "=", sum);

// SUBTRACTION OPERATOR
let difference = num1 - num2;
console.log("\tSubtraction:", num1, "-", num2, "=", difference);

// MULTIPLICATION OPERATOR
let product = num1 * num2;
console.log("\tMultiplication:", num1, "*", num2, "=", product);

// DIVISION OPERATOR
let quotient = num1 / num2;
console.log("\tDivision:", num1, "/", num2, "=", quotient);

// MODULUS OPERATOR (REMAINDER)
let remainder = num1 % num2;
console.log("\tModulus:", num1, "%", num2, "=", remainder);

// EXPONENTIATION OPERATOR
let power = num1 ** num2;
console.log("\tExponentiation:", num1, "**", num2, "=", power);
console.log("");

// ============================================
// INCREMENT AND DECREMENT OPERATORS
// ============================================
// INCREMENT OPERATOR
console.log("INCREMENT AND DECREMENT OPERATORS:");
let counter = 5;
counter++;
console.log("\tAfter increment (counter++):", counter);

// DECREMENT OPERATOR
counter--;
console.log("\tAfter decrement (counter--):", counter);

console.log("");

// ============================================
// ASSIGNMENT OPERATORS
// ============================================
console.log("ASSIGNMENT OPERATORS:");
let x = 20;
console.log("\tInitial value of x:", x);

// ADDITION ASSIGNMENT OPERATOR
x += 5;
console.log("\tAfter x += 5:", x);

// SUBTRACTION ASSIGNMENT OPERATOR
x -= 3;
console.log("\tAfter x -= 3:", x);

// MULTIPLICATION ASSIGNMENT OPERATOR
x *= 2;
console.log("\tAfter x *= 2:", x);

// DIVISION ASSIGNMENT OPERATOR
x /= 4;
console.log("\tAfter x /= 4:", x);

// MODULUS ASSIGNMENT OPERATOR
x %= 3;
console.log("\tAfter x %= 3:", x);

console.log("");

// ============================================
// COMPARISON OPERATORS
// ============================================
console.log("COMPARISON OPERATORS:");
let a = 5;
let b = "5";
let c = 10;

// EQUAL TO OPERATOR (VALUE ONLY)
console.log("\t5 == '5':", a == b);

// STRICT EQUAL TO OPERATOR (VALUE AND TYPE)
console.log("\t5 === '5':", a === b);

// NOT EQUAL TO OPERATOR
console.log("\t5 != 10:", a != c);

// STRICT NOT EQUAL TO OPERATOR
console.log("\t5 !== '5':", a !== b);

// GREATER THAN OPERATOR
console.log("\t10 > 5:", c > a);

// LESS THAN OPERATOR
console.log("\t5 < 10:", a < c);

// GREATER THAN OR EQUAL TO OPERATOR
console.log("\t5 >= 5:", a >= 5);

// LESS THAN OR EQUAL TO OPERATOR
console.log("\t5 <= 10:", a <= c);

console.log("");

// ============================================
// LOGICAL OPERATORS
// ============================================

console.log("LOGICAL OPERATORS:");
console.log("");

// LOGICAL AND OPERATOR
console.log("LOGICAL AND OPERATOR");
console.log("\ttrue && true:", isTrue && true);
console.log("\ttrue && false:", isTrue && isFalse);
console.log("");

// LOGICAL OR OPERATOR
console.log("LOGICAL OR OPERATOR");
console.log("\ttrue || false:", isTrue || isFalse);
console.log("\tfalse || false:", isFalse || false);
console.log("");

// LOGICAL NOT OPERATOR
console.log("LOGICAL NOT OPERATOR");
console.log("\t!true:", !isTrue);
console.log("\t!false:", !isFalse);
console.log("");

// ============================================
// STRING OPERATORS
// ============================================

console.log("STRING OPERATORS:");

// STRING CONCATENATION OPERATOR
let greeting = text1 + " " + text2;
console.log("\tString concatenation:", greeting);

// STRING CONCATENATION ASSIGNMENT OPERATOR
let message = "Good ";
message += "Morning";
console.log("\tString concatenation assignment:", message);
console.log("");

// ============================================
// TYPEOF OPERATOR
// ============================================

// TYPEOF OPERATOR - CHECKS THE TYPE OF A VALUE

console.log("THE TYPEOF OPERATOR:");

console.log("\ttypeof 42:", typeof 42);
console.log("\ttypeof 'hello':", typeof "hello");
console.log("\ttypeof true:", typeof true);
console.log("\ttypeof undefined:", typeof undefined);
console.log("");

// ============================================
// TERNARY OPERATOR (CONDITIONAL)
// ============================================

// TERNARY OPERATOR
console.log("THE TERNARY OPERATOR:");
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("\tCan vote at age 18?", canVote);

let temperature = 25;
let weather = temperature > 30 ? "Hot" : "Pleasant";
console.log("\tWeather at 25 degrees:", weather);
console.log("");

// END OF PROGRAM
console.log("END PROGRAM.");
console.log("");
