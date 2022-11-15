class Figure {
    color;
    _name;
    constructor(color) {
        this.color = color;
    }
    get getColor() {
        console.log(this.color);
    }
    set setNewColor(color) {
        this.color = color;
    }
    get getName() {
        return this._name;
    }
}

class Circle extends Figure{
    _name = "Circle";
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    calcArea() {
        console.log(Math.sqrt(this.radius, 2)*Math.PI);
    }
}

class Rectangle extends Figure{
    _name = "Rectangle";
    constructor(color, side1, side2) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
    }
    get getSides() {
        return this.side1 + " " + this.side2;
    }
    calcArea() {
        console.log(this.side1*this.side2);
    }
    findDiagonal() {
        console.log(Math.sqrt(this.side1*this.side1 + this.side2*this.side2));
    }
}

class Square extends Rectangle{
    _name = "Square";
    constructor(color, side) {
        super(color, side, side);
        this.side = side;
    }
    findCube () {
        console.log(Math.pow(this.side, 3));
    }
}
let dot1 = {
    x: 4,
    y: 4,
};

let dot2 = {
    x: 9,
    y: 6,
};

function crossArea(figure1, figure2, dot1, dot2) {
    if(figure1.getName != figure2.getName)
        return false;
    if(figure1.getName == "Circle") {
            let range_between_dots = Math.sqrt(Math.pow(dot1.x-dot2.x, 2) + Math.pow(dot1.y-dot2.y, 2));
            if(figure1.getRadius + figure2.getRadius <= range_between_dots)
                return 0;

            let S1 = (Math.pow(figure1.getRadius, 2)*
                ((2*Math.acos((Math.pow(figure1.getRadius, 2) - Math.pow(figure2.getRadius, 2) + Math.pow(range_between_dots, 2))/
                    (2*figure1.getRadius*range_between_dots)))-Math.sin((2*Math.acos((Math.pow(figure1.getRadius, 2) - Math.pow(figure2.getRadius, 2) + Math.pow(range_between_dots, 2))/
                    (2*figure1.getRadius*range_between_dots))))))/2;
            let S2 = (Math.pow(figure2.getRadius, 2)*
                ((2*Math.acos((Math.pow(figure2.getRadius, 2) - Math.pow(figure1.getRadius, 2) + Math.pow(range_between_dots, 2))/
                    (2*figure2.getRadius*range_between_dots)))-Math.sin((2*Math.acos((Math.pow(figure2.getRadius, 2) - Math.pow(figure1.getRadius, 2) + Math.pow(range_between_dots, 2))/
                    (2*figure2.getRadius*range_between_dots))))))/2;
            return S1 + S2;
    }
    if(figure1.getName == "Square") {
        let bigger_side = figure1.side1<=figure2.side1?figure2.side1:figure1.side1;
        let smaller_side = figure1.side1>=figure2.side1?figure2.side1:figure1.side1;
        let l1, l2;
        if(Math.abs(dot1.x-dot2.x) >= (figure1.side1+figure2.side1)/2)
            return false;
        if(Math.abs(dot1.y-dot2.y) >= (figure1.side1+figure2.side1)/2)
            return false;
        if(((+figure1.side1)+(+figure2.side1))/2 + Math.abs(dot1.x-dot2.x) <= bigger_side)
            l1 = smaller_side;
        else
            l1 = (((+figure1.side1)+(+figure2.side1))/2 - Math.abs(dot1.x-dot2.x));
        if(((+figure1.side1)+(+figure2.side1))/2 + Math.abs(dot1.y-dot2.y) <= bigger_side)
            l2 = smaller_side;
        else
            l2 = (((+figure1.side1)+(+figure2.side1))/2 - Math.abs(dot1.y-dot2.y));

        return l2*l1;
    }
    if(figure1.getName == "Rectangle") {
        let l1, l2;
        let bigger_side_on_y = figure1.side1<=figure2.side1?figure2.side1:figure1.side1;
        let bigger_side_on_x = figure1.side2<=figure2.side2?figure2.side2:figure1.side2;
        let smaller_side_on_y = figure1.side1>=figure2.side1?figure2.side1:figure1.side1;
        let smaller_side_on_x = figure1.side2>=figure2.side2?figure2.side2:figure1.side2;

        if(Math.abs(dot1.y-dot2.y) >= (figure1.side1+figure2.side1)/2)
            return false;
        if(Math.abs(dot1.x-dot2.x) >= (figure1.side2+figure2.side2)/2)
            return false;


        if(((+figure1.side1)+(+figure2.side1))/2 + Math.abs(dot1.y-dot2.y) <= bigger_side_on_y)
            l1 = smaller_side_on_y;
        else
            l1 = (((+figure1.side1)+(+figure2.side1))/2 - Math.abs(dot1.y-dot2.y));

        if(((+figure1.side2)+(+figure2.side2))/2 + Math.abs(dot1.x-dot2.x) <= bigger_side_on_x)
            l2 = smaller_side_on_x;
        else
            l2 = (((+figure1.side2)+(+figure2.side2))/2 - Math.abs(dot1.x-dot2.x));

        return l2*l1;
    }
}
let square1 = new Square("blue", 8);
let square2 = new Square("red", 6);

let rectangle1 = new Rectangle("white", 4, 8);
let rectangle2 = new Rectangle("orange", 6, 8);

let circle1 = new Circle("green", 8);
let circle2 = new Circle("brown", 5);

console.log("Center of first figure: x - " + dot1.x + " y - " + dot1.y);
console.log("Center of second figure: x - " + dot2.x + " y - " + dot2.y);
console.log("Cross area of " + square1.color + " " + square1.getName + " and " + square2.color + " " + square2.getName + ": " + crossArea(square1, square2, dot1, dot2))
console.log("Cross area of " + rectangle1.color + " " + rectangle1.getName + " and " + rectangle2.color + " " + rectangle2.getName + ": " + crossArea(rectangle1, rectangle2, dot1, dot2))
console.log("Cross area of " + circle1.color + " " + circle1.getName + " and " + circle2.color + " " + circle2.getName + ": " + crossArea(circle1, circle2, dot1, dot2))

