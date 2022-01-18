// 17.program to perform intersection between two arrays

function performIntersection(arr1, arr2) {
  const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

  return intersectionResult;
}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
