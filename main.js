class Coach{

    constructor(firstName, specialization, rating) {
       this.firstName = firstName;
        this.specialization = specialization;
        this.rating = rating;
    }
    displayInfo(){
        if (this.firstName === this.firstName && this.specialization === this.specialization &&
            this.rating === this.rating){
            console.log(`Couch: ${this.firstName}, Specialization: ${this.specialization}, Raiting: ${this.rating}`);
        }else{
            console.log("Error 404");
        }
    }
}
const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
const coach3 = new Coach('Mike James', 'Boxing', 4.4);
coach1.displayInfo();
coach2.displayInfo();
coach3.displayInfo();