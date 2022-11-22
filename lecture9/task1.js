import calculate from './calculator.js';
import readline from "readline-sync";

console.log(calculate(readline.question("Enter in format x+y/z-...+c: \n")));
