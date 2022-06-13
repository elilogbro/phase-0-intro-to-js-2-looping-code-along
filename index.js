// Code your solutions in this file
//const recipients = ["Charlie", "Samip", "Ali"];
const newArray = [];
//const holiday = "birthday";

function writeCards(recipients, holiday) {
    for (var i = 0; i < recipients.length; i++) {
        newArray.push(`Thank you, ${recipients[i]}, for the wonderful ${holiday} gift!`);
    }
    
    return newArray;
}


function countDown(count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
}

