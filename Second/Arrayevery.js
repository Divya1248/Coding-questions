function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); // false

if (!check) {
    console.log("All members must be at least 18 years of age.")
}

// using arrow function
let check1 = ageArray.every(age => age >= 18); // false
console.log(check1);