"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let readlineSync = require('readline-sync');
function retKof(str) {
    let kof = new Array();
    let nev = str.match(/[+\-]?\d*x*\^?\d*/g);
    if (nev != null) {
        nev.pop();
        if (nev[0][0] != "-")
            nev[0] = "+" + nev[0];
        for (let i in nev) {
            if (nev[i][1] == "x")
                kof[i] = parseInt(nev[i][0] + 1);
            else
                kof[i] = parseInt(String(nev[i].match(/[+|-]\d+/)));
        }
    }
    return kof;
}
function retPow(str) {
    let pow = new Array();
    let nev = str.match(/[+\-]?\d*x*\^?\d*/g);
    if (nev != null) {
        nev.pop();
        for (let i in nev) {
            if (nev[i].match(/\^\d+/g) != null)
                pow[i] = parseInt(String(nev[i].match(/\^\d+/g)).slice(1, nev[1].length));
            else if (nev[i].match(/x/g) != null)
                pow[i] = 1;
            else
                pow[i] = 0;
        }
    }
    return pow;
}
function checkKof(kof) {
    for (let i of kof) {
        if (Math.abs(i) > 104)
            return false;
    }
    return true;
}
function checkPow(pow) {
    for (let i of pow) {
        if (i > 10)
            return false;
    }
    return true;
}
function mutKof(arr1, arr2) {
    let rez = new Array();
    for (let i of arr1) {
        for (let j of arr2)
            rez.push(i * j);
    }
    return rez;
}
function mutPow(arr1, arr2) {
    let rez = new Array();
    for (let i of arr1) {
        for (let j of arr2) {
            rez.push(+i + j);
        }
    }
    return rez;
}
function rec(arr1, arr2) {
    for (let i = 0; i < arr1.length - 1; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            if (arr1[i] == arr1[j]) {
                arr1.splice(j, 1);
                arr2[i] += arr2[j];
                arr2.splice(j, 1);
                j--;
            }
        }
    }
}
function sorto(arr1, arr2) {
    let tmp;
    for (let i = 0; i < arr1.length - 1; ++i) {
        for (let j = i + 1; j < arr1.length; ++j) {
            if (arr1[j] > arr1[i]) {
                tmp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = tmp;
                tmp = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = tmp;
            }
        }
    }
}
function getRez(arr1, arr2) {
    let rez = "";
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] < -1)
            rez += arr2[i];
        else if (arr2[i] > 1)
            rez += "+" + arr2[i];
        else if (arr2[i] < 0)
            rez += "-";
        else
            rez += "+";
        if (arr1[i] > 1)
            rez += "x^" + arr1[i];
        else if (arr1[i] > 0)
            rez += "x";
    }
    return rez;
}
let firstKof;
let firstPow;
let secondKof;
let secondPow;
let first = readlineSync.question("Введите первый многочлен: ");
let second = readlineSync.question("Введите второй многочлен: ");
//x^10+21x^2-3x+6
//-2x^5-x^2+13x^2+x+1
firstPow = retPow(first);
firstKof = retKof(first);
secondPow = retPow(second);
secondKof = retKof(second);
if (checkKof(firstKof) && checkPow(firstPow) && checkKof(secondKof) && checkPow(secondPow)) {
    let rezPow = mutPow(firstPow, secondPow);
    let rezKof = mutKof(firstKof, secondKof);
    rec(rezPow, rezKof);
    sorto(rezPow, rezKof);
    let a = getRez(rezPow, rezKof);
    console.log(a);
}
else
    console.log("Неправильные значения");
//# sourceMappingURL=task1.js.map