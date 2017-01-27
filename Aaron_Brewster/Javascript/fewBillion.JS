var days = 0;

for (var i = 0.01; i < 55100600009; i = i+i){
     days += 1;

     if (days == 30) {
          console.log(i);
     }
     if (i >= 10000 && i < 11000) {
          console.log('After ', days, ' days I have 10,000 dollars!')
     }
     if (i > 1000000000) {
          console.log('After ', days, ' days I finally have enough to be like Trump!!!');
          break;
     }

}

//Or use a simpler while loop!!!! Thanks Cody!

money = 0.01
days = 1

while(money < 1055550000000){

     days++;

     money += money;

     if (money >= 10000 && money < 11000){
          console.log('I had 10K after ' + days + ' days.');
     }
     if (days == 30) {
          console.log(money);
     }
     if (money > 1000000000) {
          console.log('After ', days, 'I have tons of cash');
          break;
     }

}
