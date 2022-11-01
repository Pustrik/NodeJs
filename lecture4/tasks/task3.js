function createBase(base) {
    return function (num) {
        return +base + +num;
    }
}

while(1) {
    const readline = require('readline-sync');
    let base = readline.question("Введите базовое число: \n");
    let addSix = createBase(base);
    console.log("addSix(10) - " + addSix(10));
    console.log("addSix(21) - " + addSix(21));
    console.log("addSix(0) - " + addSix(0));
}