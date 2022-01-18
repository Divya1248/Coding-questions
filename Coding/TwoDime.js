// 27 program to create a two dimensional array

function twoDimensionArray(a, b) {
  let arr = [];

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }

  // inserting elements to array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}

const x = 4;
const y = 6;

const result = twoDimensionArray(x, y);
console.log(result);
