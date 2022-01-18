// 25. merge two objects and duplictate the values
let arr1 = [1, 2, 3, 2];
let arr2 = [2, 4, 5];

let merge = [...arr1, ...arr2];
console.log(merge);

let remove = [...new Set(merge)];
console.log(remove);

// =============
function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);