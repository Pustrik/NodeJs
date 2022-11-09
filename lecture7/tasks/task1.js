class Figure {
    color;
    _name;
    constructor(color) {
        this.color = color;
    }
    get getColor() {
        console.log(this.color);
    }
    setNewColor(color) {
        this.color = color;
    }
    get getName() {
        console.log(this._name);
    }
}

class Triangle extends Figure{
    _name = "Triangle";
    constructor(color, side1, side2, side3) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    get getSides() {
        console.log(this.side1 + " " + this.side2 + " " + this.side3);
    }
    calcArea() {
        let p = (this.side1+this.side2+this.side3)/2;
        console.log(Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3)));
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
        console.log(this.side1 + " " + this.side2);
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

class Rhombus extends Square {
    _name = "Rhombus";
    constructor(color, side, angle) {
        super(color, side);
        this.side = side;
        this.angle = angle;
    }
    get getAngle() {
        console.log(this.angle);
    }
    calcArea() {
        console.log(this.side*this.side*Math.sin(this.angle));
    }
}

let blueSquare = new Square("blue", 10);
let redTriangle = new Triangle("red", 5, 6, 3);
let whiteRhombus = new Rhombus("white", 5, 70);
let yellowRectangle = new Rectangle("yellow", 3, 6);

blueSquare.getName;
blueSquare.getColor;
blueSquare.findCube();

redTriangle.getName;
redTriangle.getColor;
redTriangle.getSides;

whiteRhombus.getName;
whiteRhombus.getColor;
whiteRhombus.getAngle;

yellowRectangle.getName;
yellowRectangle.getColor;
yellowRectangle.findDiagonal();