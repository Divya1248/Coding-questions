function multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(multiply(3)(4)(5));

// table
const number = parseInt(prompt("Enter an integer: "));

for (let i = 1; i <= 10; i++) {
  const result = i * number;

  console.log(` ${i} *${number} = ${result}`);
}
