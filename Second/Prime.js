function prime(n) {
  let isprime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(`${n} is a prime number`);
  } else {
    console.log(`${n} is not a prime number`);
  }
}
prime(9);
