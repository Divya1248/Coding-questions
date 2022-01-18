//20 program to merge property of two objects
let person = {
  name: "div",
  age: 21,
  sal: 25000,
};
let emp = {
  gender: "female",
};
// in both object if we use same name it update the value
// let merge = Object.assign(person, emp);
let merge = { ...person, ...emp };
console.log(merge);
