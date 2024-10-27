class calculator{
    constructor() {

    }
    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            console.log("Invalid input, please enter numbers.");
            return NaN;
        }
        return num1 + num2;
    }

    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            console.log("Invalid input, please enter numbers.");
            return NaN;
        }
        return num1 - num2;
    }

    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            console.log("Invalid input, please enter numbers.");
            return NaN;
        }
        return num1 * num2;
    }

    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            console.log("Invalid input, please enter numbers.");
            return NaN;
        }
        if (num2 === 0) {
            console.log("На ноль делить нельзя!");
            return NaN;
        }
        return num1 / num2;
    }
}

const calc = new calculator();
console.log(calc.add(2, 10));
console.log(calc.subtract(2, 10));
console.log(calc.multiply(2, 10));
console.log(calc.divide(2, 10));
console.log(calc.divide(2, 0));
