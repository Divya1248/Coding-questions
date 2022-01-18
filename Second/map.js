let arr = [2, 4, 6, 8, 10];
let a = arr.map((val, index) => {
  if (index % 2 == 0) {
    return (val += 5);
    }
  else {
      return val
    }
});
console.log(a);

let arr = [2, 3, 3, 4, 4, 5, 6, 6];
let a = new Set(arr);
console.log(a);


// // second largest
// let arr = [2, 4, 98, 456, 3]
// let sorted = [];
// for (let i = 0; i < arr.length; i++){
//     for (let j = 1; j < sorted.length; j++){
        
//     }
// }


