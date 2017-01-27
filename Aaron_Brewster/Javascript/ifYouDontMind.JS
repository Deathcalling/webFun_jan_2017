var hour = 8;

var minute = 12;

var period = "AM"

if (minute < 30) {

     var x = 'just after';

}

else {

     x = 'almost';

     hour += 1;

}

if (period == 'AM' || 'am') {

     var y = 'in the morning'
}

else {

     y = 'in the evening'
}


console.log("It's", x, hour, y)
