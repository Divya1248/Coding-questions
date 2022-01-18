// 8.program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
  let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}
let stri = prompt("Enter a string: ");
let result = capitalizeFirstLetter(stri);
console.log(result);
