let userInformation = {
    name: "Alex",
    surname: "Davidenko",
    age: 34,
    city: "Lviv",
    getData: function (){
        console.log(`Ім'я : ${this.name}`);
        console.log(`Прізвище : ${this.surname}`);
        console.log(`Вік : ${this.age}`);
        console.log(`Місто : ${this.city}`);
    }
};
userInformation.getData();
