reverse
var a = "maggi";
var reve = "";
// for(let i  > = 0; i = a.length - 1;  i--){
//     reve = reve + a[i] ;
// }
for (let i = a.length - 1; i >= 0; i--){
    reve=reve+a[i]
}
console.log(reve);


// =================
var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeparator(string, "");

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}