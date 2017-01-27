var upTheHill = ["james", "jill", "jane", "jack"]

var there = '-->'

function jackAndJill(arr, point, reverse){

     if (reverse === true) {

          for (var i = 0; i < arr.length; i++) {
               console.log(i, point, arr[i]);

          }

     }

     else {

          for (var i = arr.length - 1; i >= 0 ; i--) {
               console.log(i, point, arr[i]);

          }

     }

}

jackAndJill(upTheHill, there, false)
