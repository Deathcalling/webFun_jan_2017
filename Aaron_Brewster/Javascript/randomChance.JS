function lottery(quarters, leave) {

          for (var i = quarters; i < leave; i--) {

               var x = Math.floor((Math.random() * 100) + 1);

               if (x = 100) {

                    i += Math.floor((Math.random() * 100) + 50);

               }

               console.log(i);

     }

}

lottery(20, 550)
