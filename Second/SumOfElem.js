var arr = [2, 8, 9, 4];
sum = 0;
for (let val in arr) {
  sum += arr[val];
}
console.log(sum);

// reduce
var arr = [2, 8, 9, 4];

let summing = arr.reduce((a, val) => {
  return a + val;
}, 0);

console.log(summing);
