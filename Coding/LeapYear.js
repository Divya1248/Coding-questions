// 13.program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if (year % 4===0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}
const year = prompt("Enter a year:");

checkLeapYear(year);
