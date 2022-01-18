let sum = 0;
let number = prompt("enter a number");
let temp = number;

while (temp > 0) {
  remainder = temp % 10;
  temp = parseInt(temp / 10);
  sum = sum * 10 + remainder;
}

if (sum == number) {
  console.log("The  number is Palindrome");
} else {
  console.log("The  number is not palindrome");
}
