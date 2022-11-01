function square() {
    this.area = function(length) {
        if(length < 1 || length > 1000) return false;
        return length*length;
    }
    this.perimeter = function(length) {
        if(length < 1 || length > 1000) return false;
        return length*4;
    }
}

while(1) {
    const readline = require('readline-sync');
    let length = readline.question("Введите длину стороны квадрата (1 ≤ длина ≤ 1000)): \n");
    let white_square = new square();
    console.log("Площадь квадрата: " + white_square.area(length));
    console.log("Периметр квадрата: " + white_square.perimeter(length));
}