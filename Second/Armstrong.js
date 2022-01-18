const number = prompt("Enter the number");

const count = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
  const remider = number % 10;
  sum += remider ** count;
  temp = parseInt(number / 10);
}
if (sum == number) {
  document.write("it is an Armstrong");
} else {
  document.write("it's not an Armstrong");
}




