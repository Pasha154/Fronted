function Student(firstName, secondName, dateOfBirthday){
    this.firstName = firstName;
    this.secondName = secondName;
    this.dateOfBirthday = dateOfBirthday;
    this.grades = [];
    this.attendance = [];
    this.averageGrade = function (){
        let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;

    }
    this.getAge = function (){
        return 2024-dateOfBirthday;
    }
    this.present = function (){
        if (this.attendance.length >= 25) return;
        this.attendance.push(true);
    }
    this.absent = function (){
        if (this.attendance.length >=25) return;
        this.attendance.push(false);

    }
    this.addGrades = function (grade){
        this.grades.push(grade);

    }
    this.summary = function (){
        const grade = this.averageGrade();

        let countOfPresent = 0;
        for (let i =0; i < this.attendance.length; i++){
            if (this.attendance[i]) countOfPresent ++;
        }
        const percentAttendance = countOfPresent / this.attendance.length;

        if(this.averageGrade() > 90 && percentAttendance > 0.9 ){
            console.log("Молодець!");
        }else if (this.averageGrade() > 90 && percentAttendance < 0.9 ||
            this.averageGrade() < 90 && percentAttendance > 0.9 ){
            console.log("Добре, але можна краще!");
        }else if (this.averageGrade() < 90 && percentAttendance < 0.9){
            console.log("Редиска!")
        }

    }

}

const Ivan = new Student("Ivan", "Ivanov", 2002);
console.log(Ivan.getAge());
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.addGrades(90);
Ivan.addGrades(95);
Ivan.addGrades(100);
Ivan.addGrades(95);
Ivan.addGrades(90);
Ivan.summary();

const Anya = new Student("Anya", "Minion", 2004);
console.log(Anya.getAge());
Anya.present();
Anya.present();
Anya.absent();
Anya.present();
Anya.present();
Anya.addGrades(75);
Anya.addGrades(95);
Anya.addGrades(95);
Anya.addGrades(95);
Anya.addGrades(80);
Anya.summary();

const Misha = new Student("Misha", "Medvid", 2000);
console.log(Misha.getAge());
Misha.present();
Misha.present();
Misha.absent();
Misha.present();
Misha.absent();
Misha.addGrades(75);
Misha.addGrades(95);
Misha.addGrades(95);
Misha.addGrades(95);
Misha.addGrades(100);
Misha.summary();

