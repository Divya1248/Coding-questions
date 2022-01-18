// 24. program to append an object to an array

function insertObject(arr, obj) {
// append object
// arr.push(obj)
// arr.splice(index, 0, obj)  index=arr.length
  arr = [...arr, object];

  console.log(arr);
}
let array = [1, 2, 3];
let object = { x: 12, y: 8 };
insertObject(array, object);
