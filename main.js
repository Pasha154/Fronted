let simpleNumber = +prompt("Введіть Ваше число :");
let isPrime = true;

if (simpleNumber === 1) {
    console.log("Число 1 не є ні простим, ні складеним.");
} else if (simpleNumber > 1) {
    for (let i = 2; i < simpleNumber; i++) {
        if (simpleNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Число просте!");
    } else {
        console.log("Число складене!");
    }
} else {
    console.log("Введіть число більше за 1.");
}


