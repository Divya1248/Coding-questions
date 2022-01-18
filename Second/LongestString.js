arr = ["ramprasad is bad boy ", "comedy ", "Raghu 360"];

for (var i = 0; i < arr.length; i++) {
  for (var j = 1; j < arr.length; j++) {
    if (arr[i].length < arr[j].length) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log("longest string " + arr[0]);


// =================
let arr = ["divya", "prathap", "manisha", "suu"];

for (let i = 0; i < arr.length; i++) {
  let obj = arr[i];
  if (obj.length > 5) {
    document.write(obj);
  }
}