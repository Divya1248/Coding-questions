// 2.How to convert array to object

let emp = {
  id: 1,
  name: "divya",
  company: "testyantra",
};
// Method 1: Using Object.assign() method
console.log(Object.assign({}, emp));

// Method 2 Using Spread operator
console.log({ ...emp });

// Method 3: Using Object.fromEntries() method
let arr1 = [
  ["id", "1"],
  ["name", " User"],
  ["age", "25"],
  ["profession", "Developer"],
];
console.log(Object.fromEntries(arr1));
