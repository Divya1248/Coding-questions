// 21. count vowels in string
const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  // initialize count
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
// another way count
function countVowel(str) {
  let count = str.match(/[aeiou]/gi).length;
  return count;
}
const string = prompt("Enter a string: ");

const result = countVowel(string);

console.log(result);
