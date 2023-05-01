class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }

    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5); // створення кола з радіусом 5

console.log(circle.radius); // виведе 5
circle.radius = 10;
console.log(circle.radius); // виведе 10

console.log(circle.diameter); // виведе 20

console.log(circle.area); // виведе 314.1592653589793

console.log(circle.circumference); // виведе 62.83185307179586
