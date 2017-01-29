function numbers(arr) {

     var arrNew = []

     for (var i = 0; i < arr.length; i++) {

          if (typeof arr[i] == "number") {

               arrNew.push(arr[i]);

          }

     }

     console.log(arrNew);
}

numbers([1,5, 'eight, 4'])
