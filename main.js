let stringNumber = "10369";
let realNumber = +stringNumber;

let fiveNumber = realNumber % 10;
let secondNumber = Math.floor(realNumber / 10);
let fourNumber = secondNumber % 10;
let thirdNumber = Math.floor(secondNumber / 10);
let threeNumber = thirdNumber % 10;
let fourthNumber = Math.floor(thirdNumber / 10);
let twoNumber = fourthNumber % 10;
let fifthNumber = Math.floor(fourthNumber / 10);
let oneNumber = fifthNumber % 10;

console.log(`${oneNumber} ${twoNumber} ${threeNumber} ${fourNumber} ${fiveNumber}`);