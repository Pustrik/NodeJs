function multiply(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) return false;
    return num1 * num2;
}
function double(num1) {
    if(isNaN(num1)) return false;
    return multiply(num1, 2);
}
function square(num1) {
    if(isNaN(num1)) return false;
    return multiply(num1, num1);
}
while (1){
    const readline = require('readline-sync');
    let num = readline.question("Введите число: \n");
    console.log("Функция double: " + double(num));
    console.log("Функция square: " + square(num));
    console.log("Функция multiply: " + multiply(double(num), square(num)));
}