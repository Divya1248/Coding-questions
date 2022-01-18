// // 6. find last three digits are same
let a = prompt("Enter a first integer: ");
let b = prompt("Enter a second integer: ");
let c = prompt("Enter a third integer: ");

// find the last digit
let result1 = a % 10;
let result2 = b % 10;
let result3 = c % 10;

// compare the last digits
if (result1 == result2 && result1 == result3) {
  console.log(`${a}, ${b} and ${c} has same last digit.`);
} else {
  console.log(`${a}, ${b} and ${c} have different last digit.`);
}
