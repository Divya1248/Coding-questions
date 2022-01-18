// descending
var arr = [1, 2, 3, 9, 8];
var temp = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);




// 26.sort object by age
let info = [
  {
    name: "kart",
    age: 25,
  },
  {
    name: "agok",
    age: 24,
  },
];
let data = info.sort((a, b) => {
  return a.age - b.age;
});
console.log(data);

// program to sort array by property name

function sortName(a, b) {
  // converting to uppercase to have case-insensitive comparison
  const name1 = a.name.toUpperCase();
  const name2 = b.name.toUpperCase();

  let comparingValue = 0;

    if (name1 > name2) {
      comparingValue = 1;
    } else if (name1 < name2) {
      comparingValue = -1;
    }
    return comparingValue;
}

const students = [
  { name: "cra", age: 24 },
  { name: "aohn", age: 24 },
  { name: "back", age: 25 },
];

console.log(students.sort(sortName));



let obj = [
  {
    name: "prathap",
    age: 24,
  },
  {
    name: "anusha",
    age: 21,
  },
  {
    name: "divya",
    age: 23,
  },
];

let object = obj.sort((a, b) => {
  return a.age - b.age;
});
console.log(object);


// alphabetic

const string = prompt("Enter a sentence: ");

const words = string.split(" ");

words.sort();

console.log("The sorted words are:");

for (const element of words) {
  console.log(element);
}