// different ways to Check if the value exists in Array in Javascript

var i;
function array(value) {
  for (i = 0; i < arr.length; i++) {
    var name = arr[i];
    if (name == value) {
      console.log("value exist");
    } else {
      console.log("value not exist");
    }
  }
}
array("krishna");

// for(var key of arr){
//     if(key==='divya'){
//         console.log('value exists');
//     }
//     else
//     console.log('value exists');
//}

