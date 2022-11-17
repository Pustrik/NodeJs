const readline = require('readline-sync');
let count = 0;
while(1) {
    console.clear();
    console.log("If u want to end game enter \"q\"");
    let number = readline.question("Enter num 1-6: \n");
    if(number == "q") break;

    if(number < 1 || number > 6) {
        console.log("Wrong value");
        continue;
    }
    let rand_num = Math.floor(Math.random() * 6) + 1;
    if(number == rand_num)
        count += 2;
    else if(rand_num - 1 == number || rand_num + 1 == number)
        count++;
}
console.log("You have got: " + count);