
// program to format the date
// get current  date
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

// display in various formats
const date1 = month + "/" + day + "/" + year;
console.log(date1);

const date2 = month + "-" + day + "-" + year;
console.log(date2);

const date3 = day + "-" + month + "-" + year;
console.log(date3);

const date4 = day + "/" + month + "/" + year;
console.log(date4);



 // 12.program to display the date and time
// // get date and time
const date = new Date(2017, 2, 12, 9, 25, 30);
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log("Date: " + n);
console.log("Time: " + time);

