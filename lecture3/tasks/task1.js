const readline = require('readline-sync');
while(1) {
    let number = readline.question("Enter num 10-99: \n");
    if (number > 9 && number < 100) {
        console.log("Digits: " + number[0] + " " + number[1]);
        break;
    }
    console.log("Wrong number, try again.")
}