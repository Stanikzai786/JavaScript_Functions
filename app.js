console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count) {
    for (let i = 1; i <= Math.abs(count); i++) {
        if (i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
    let oldEnoughMsg = `congrats ${name}! you can Drive!`;
    let tooYoungMsg = `Sorry ${name}, You need to wait ${
        16 - age
    } your(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg)
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge9("Cameron", 21);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
    switch (true) {
        case x > 0 && y > 0:
            return "Qyadrant 1";
        case x < 0 && y > 0:
            return "Qyadrant 2";
        case x < 0 && y < 0:
            return "Qyadrant 3";
        case x > 0 && y < 0:
            return "Qyadrant 4";
        case x == 0 && y != 0:
            return "X Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Origin";
    }
}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(11, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2, 3, 4)); //scalene
console.log(checkTriangle(2, 2, 2)); //eq
console.log(checkTriangle(1, 2, 2)); // isoceles
console.log(checkTriangle(1, 1, 2)); // Invalid