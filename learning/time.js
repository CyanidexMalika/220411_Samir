let myday = new Date().getDay()
switch(myday){
case 0:
    console.log("Sunday");
    break;
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;

case 5:
    console.log("friday");
    break;
case 6:
    console.log("Saturday");
    break;

default:
    console.log("Error");





}

const a=19;
const canVote = (a>=18)?"canVote":"cannot vote"

document.write(canVote);



