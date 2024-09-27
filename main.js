
let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step ++;
        return this;
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step --;
        return this;
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.step);
        return this;
    }
};
ladder.up().up().down().showStep();

//Роблю для себе, думаю не завадить.
//Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
/*let calculator = {
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum(){
        return this.a + this.b;

    },
    mul() {
       return this.a * this.b;


    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());*/

