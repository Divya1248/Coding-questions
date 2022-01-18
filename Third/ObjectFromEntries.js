// Converting Map to an Object
const map = new Map([
    ["a", 1],
    ["b", 2],
  ]);
  const obj = Object.fromEntries(map);
  console.log(obj); 
  
  // Converting Map to an Object
  const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
  ];
  const newObj = Object.fromEntries(arr);
  console.log(newObj); 