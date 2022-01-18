let array = Math.floor(Math.random() * 10);
console.log(array);

const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));

const ARRAY_LENGTH = 10;
const randomArray = [];
for (let i = 0; i < ARRAY_LENGTH; i++) {
  randomArray.push(Math.random());
}
console.log(randomArray);

let rand = ["yakshit", "harsha", "divya", "jhkjga"];
let randomnumber = Math.floor(Math.random() * rand.length);
console.log(rand[randomnumber]);
