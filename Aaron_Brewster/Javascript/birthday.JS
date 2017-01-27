var y = 'days until my birthday.';
for (var i = 60; i >= 0; i--){
     if (i > 30) {
          var x = 'I\'m a sad strange little man';
     }
     else if (i < 30 && i > 5){
          var x = 'Ohhhh, getting close now!';
     }
     else if (i < 5 && i > 0) {
          var y = 'DAYS UNTIL MY BIRTHDAY!!!';
     }
     else if (i == 0) {
          console.log('OMG NO WAY HOW DID YOU KNOW!!!!!!!!! WHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATTTTT>????????!!!!!');
          break;
     }
     console.log(i, y, x);
}
