import '../sass/style.scss';


const button = document.querySelector('#winBtn');

    let arrFirstName = ["John", "Piter", "Jack", "Derek", "Tim"];
    let arrSurname = ["Peterson", "Parkinson", "Davidson", "Ted", "Parker"];

    function randomName(arrFirstName, arrSurname) {
        let firstName = arrFirstName[Math.floor(Math.random() * arrFirstName.length)];
        let surname = arrSurname[Math.floor(Math.random() * arrSurname.length)];
        return `${firstName} + ${surname}`;

    }

    button.addEventListener("click", function () {
        let name = randomName(arrFirstName, arrSurname);
        alert(name);

})