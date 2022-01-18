 // 7.program to check if the string is palindrome or not

function checkPalindrome(str) {
  let len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
let string = prompt("Enter a string: ");
let value = checkPalindrome(string);

console.log(value);

// or
let str = prompt("enter a string");

let reverse = str.split("").reverse().join("");
console.log(reverse);

if (str === reverse) {
  console.log("it is palindrome");
} else {
  console.log("not a palindrome");
}
