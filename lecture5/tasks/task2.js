let circle1 = {
    x: 0,
    y: 0,
    r: 10
};

let circle2 = {
    x: 5,
    y: 0,
    r: 10
};

let dot = {
    x: 0,
    y: 10
};

function perimeter(circle) {
    return Math.PI*circle.r*2;
}

function area(circle) {
    return Math.PI*Math.pow(circle.r, 2);
}

function crossArea(circle1, circle2) {
    let range = Math.sqrt(Math.pow(circle1.x-circle2.x, 2) + Math.pow(circle1.y-circle2.y, 2));
    if(circle1.r + circle2.r <= range)
        return 0;

    let S1 = (Math.pow(circle1.r, 2)*
        ((2*Math.acos((Math.pow(circle1.r, 2) - Math.pow(circle2.r, 2) + Math.pow(range, 2))/
            (2*circle1.r*range)))-Math.sin((2*Math.acos((Math.pow(circle1.r, 2) - Math.pow(circle2.r, 2) + Math.pow(range, 2))/
            (2*circle1.r*range))))))/2;
    let S2 = (Math.pow(circle2.r, 2)*
        ((2*Math.acos((Math.pow(circle2.r, 2) - Math.pow(circle1.r, 2) + Math.pow(range, 2))/
            (2*circle2.r*range)))-Math.sin((2*Math.acos((Math.pow(circle2.r, 2) - Math.pow(circle1.r, 2) + Math.pow(range, 2))/
            (2*circle2.r*range))))))/2;
    return S1 + S2;
}

function isInCircle(circle, dot){
    if(Math.sqrt(Math.pow(circle.x-dot.x, 2) + Math.pow(circle.y-dot.y, 2)) > circle.r)
        return false;
    return true;

}
console.log(perimeter(circle1));
console.log(area(circle1));
console.log(crossArea(circle1, circle2));
console.log(isInCircle(circle1, dot));
