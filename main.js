const myFunction = () => {
    for (let i = 0; i < 10; i++) {
        let userNumber = +prompt("Введіть число більше 100:");

        if (userNumber < 100) {
            console.log("Будь ласка, введіть число більше 100.");
            continue;
        } else if (userNumber === 100) {
            console.log("Ваше число = 100, введіть будь ласка більше 100");
        } else if (userNumber > 100) {
            console.log("Ваше число більше 100");
            return userNumber;
        }
    }

    return "Не було введено число більше 100";
}

console.log(myFunction());