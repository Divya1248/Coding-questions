// program to remove item from an array

function removeItem(array, n) {
  const index = array.indexOf(n);
  if(index > -1) {
      array.splice(index, 1);
  }
  return array;
}

const result = removeItem([1, 2, 3, 4, 5], 2);
console.log(result);




// 22. Remove property in object
let obj = [
  {
    name: "rajath",
    age: 23,
    gender: "male",
    ph: 1234,
  },
  {
    name: "rajat",
    age: 33,
    gender: "female",
    ph: 12346,
  },
];

obj.map(x => {
  return delete x.ph;
});
console.log(obj);

obj.forEach(x => {
  delete x.ph;
});