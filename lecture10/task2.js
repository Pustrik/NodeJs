"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let readlineSync = require('readline-sync');
function checkVal(point) {
    if (Math.abs(point.x) > 100 || Math.abs(point.y) > 100)
        return false;
    return true;
}
function isIn(firstAngle, secondAngle, thirdAngle, dot) {
    let first, second, third;
    first = (firstAngle.x - dot.x) * (secondAngle.y - firstAngle.y) - (secondAngle.x - firstAngle.x) * (firstAngle.y - dot.y);
    second = (secondAngle.x - dot.x) * (thirdAngle.y - secondAngle.y) - (thirdAngle.x - secondAngle.x) * (secondAngle.y - dot.y);
    third = (thirdAngle.x - dot.x) * (firstAngle.y - thirdAngle.y) - (firstAngle.x - thirdAngle.x) * (thirdAngle.y - dot.y);
    if ((first >= 0 && second >= 0 && third >= 0) || (first <= 0 && second <= 0 && third <= 0))
        return true;
    else
        return false;
}
let firstAngle = {
    x: readlineSync.question("Введите x1: "),
    y: readlineSync.question("Введите y1: ")
};
let secondAngle = {
    x: readlineSync.question("Введите x2: "),
    y: readlineSync.question("Введите y2: ")
};
let thirdAngle = {
    x: readlineSync.question("Введите x3: "),
    y: readlineSync.question("Введите y3: ")
};
let dot = {
    x: readlineSync.question("Введите x0: "),
    y: readlineSync.question("Введите y0: ")
};
if (checkVal(firstAngle) || checkVal(secondAngle) || checkVal(thirdAngle) || checkVal(dot)) {
    console.log(isIn(firstAngle, secondAngle, thirdAngle, dot));
}
else
    console.log("Не верные значения координат");
//# sourceMappingURL=task2.js.map