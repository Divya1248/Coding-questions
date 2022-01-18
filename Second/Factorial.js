var a = prompt("enter the data");
if (a < 0) {
    console.log("factorial dont take negetive number");
}
else if (a == 0) {
    console.log("factorial of 0 is 1");
}

else {
    var fact = 1;
    for (i = 1; i <= a; i++){
        fact *= i;
    }
    console.log(fact);
}
console.log(a)
