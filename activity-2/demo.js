console.log("\n=== ARITHMETIC OPERATORS ===");
let a = 2;
let b = 3;

console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

console.log("With Parenthesis", (a + b) * (a - b));
console.log("Without Parenthesis", a + b * a - b);

console.log("\n=== COMPARISON OPERATORS ===");

let x = 5;
let y = "5";
let z = 10;

console.log("x =", x, "(number), y =", y, "(string), z =", z);

console.log("x == y:", x == y, "(loose equality)");
console.log("x === y:", x === y, "(strict equality)");

console.log("x != y:", x != y, "(loose inequality)");
console.log("x !== y:", x !== y, "(strict inequality)");

console.log("x > z:", x > z, "(greater than)");
console.log("x < z:", x < z, "(less than)");

console.log("x >= 5:", x >= 5, "(greater than or equal to)");
console.log("x <= 5:", x <= 5, "(less than or equal to)");

console.log("\n=== LOGICAL OPERATORS ===");

let isAdult = true;
let hasLicense = false;
let age = 20;

console.log("isAdult =", isAdult, ", hasLicense =", hasLicense, ", age =", age);

console.log("isAdult && hasLicense:", isAdult && hasLicense, "(AND - both must be true)");
console.log("isAdult || hasLicense:", isAdult || hasLicense, "(OR - at least one must be true)");
console.log("!hasLicense:", !hasLicense, "(NOT - opposite of hasLicense)");
console.log("age >= 18 && age < 65:", age >= 18 && age < 65, "(compound condition)");

console.log("\n=== CONDITIONAL STATEMENTS ===");

let score = 85;

console.log("Score:", score);

if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Good job!");
} else if (score >= 70) {
  console.log("Grade: C - Satisfactory");
} else if (score >= 60) {
  console.log("Grade: D - Needs improvement");
} else {
  console.log("Grade: F - Please study more");
}

console.log("\n=== SWITCH STATEMENT ===");

let dayOfWeek = 3;

console.log("Day number:", dayOfWeek);

switch (dayOfWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day number");
}

document.getElementById("output")
