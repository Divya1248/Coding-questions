function checkMinor(age) {
    return age < 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.some(checkMinor); // true

if (check) {
    console.log("All members must be at least 18 years of age.")
}

// using arrow function
let check1 = ageArray.some(age => age >= 18); // true
console.log(check1)