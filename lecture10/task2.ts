let readlineSync = require('readline-sync');
function checkVal(point: Point): boolean{
    if(Math.abs(point.x) > 100 || Math.abs(point.y) > 100)
        return false;
    return true;
}
function isIn(firstAngle: Point, secondAngle: Point, thirdAngle: Point, dot: Point): boolean {
    let first, second, third: number;
    first = (firstAngle.x-dot.x)*(secondAngle.y-firstAngle.y)-(secondAngle.x-firstAngle.x)*(firstAngle.y-dot.y);
    second = (secondAngle.x-dot.x)*(thirdAngle.y-secondAngle.y)-(thirdAngle.x-secondAngle.x)*(secondAngle.y-dot.y);
    third = (thirdAngle.x-dot.x)*(firstAngle.y-thirdAngle.y)-(firstAngle.x-thirdAngle.x)*(thirdAngle.y-dot.y);
    if((first >= 0 && second >= 0 && third >= 0) || (first <= 0 && second <= 0 && third <= 0))
        return true;
    else return false;
}
interface Point {
    x: number;
    y: number;
}
let firstAngle: Point = {
    x: readlineSync.question("Введите x1: "),
    y: readlineSync.question("Введите y1: ")
};
let secondAngle: Point = {
    x: readlineSync.question("Введите x2: "),
    y: readlineSync.question("Введите y2: ")
};
let thirdAngle: Point = {
    x: readlineSync.question("Введите x3: "),
    y: readlineSync.question("Введите y3: ")
};
let dot: Point = {
    x: readlineSync.question("Введите x0: "),
    y: readlineSync.question("Введите y0: ")
}
if(checkVal(firstAngle) || checkVal(secondAngle) || checkVal(thirdAngle) || checkVal(dot)) {
    console.log(isIn(firstAngle, secondAngle, thirdAngle, dot));
} else
    console.log("Не верные значения координат");
