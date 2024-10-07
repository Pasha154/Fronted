const imageArray = [
    'http://localhost:63342/Frontend/Image/1.jpg',
    'http://localhost:63342/Frontend/Image/2.jpg',
    'http://localhost:63342/Frontend/Image/3.jpg',
    'http://localhost:63342/Frontend/Image/4.jpg',
    'http://localhost:63342/Frontend/Image/5.jpg',
    'http://localhost:63342/Frontend/Image/6.jpg',
    'http://localhost:63342/Frontend/Image/7.jpg',
    'http://localhost:63342/Frontend/Image/8.jpg',
    'http://localhost:63342/Frontend/Image/9.jpg'
];

const imgToChange = document.querySelector("#imgToChange");
const clickButton = document.querySelector("#clickButton");

imgToChange.style.display = "flex";
imgToChange.style.justifyContent = "center";
clickButton.style.display = "flex";
clickButton.style.justifyContent = "center";
imgToChange.style.marginBottom = "25px";

clickButton.addEventListener('click', () => {
    // Генерируем случайное число
    let randomNum = Math.floor(Math.random() * imageArray.length);

    // Меняем источник изображения на случайное
    imgToChange.setAttribute('src', imageArray[randomNum]);

    let imageName = imageArray[randomNum].split('/').pop();
    switch (imageName){
        case "1.jpg" :
            alert("МУЛЬТФІЛЬМ БРИДКИЙ Я");
            break;
        case "2.jpg" :
            alert("МУЛЬТФІЛЬМ ШРЕК");
            break;
        case "3.jpg" :
            alert("МУЛЬТФІЛЬМ ТАЧКИ");
            break;
        case "4.jpg" :
            alert("ТРОЛІ");
            break;
        case "5.jpg" :
            alert("МУЛЬТФІЛЬМ ЗВІРОПОЛІС");
            break;
        case "6.jpg" :
            alert("МУЛЬТФІЛЬМ ЗВІРОСПІВ");
            break;
        case "7.jpg" :
            alert("МУЛЬТФІЛЬМ РАЛЬФ");
            break;
        case "8.jpg" :
            alert("МУЛЬТФІЛЬМ МАРІО");
            break;
        case "9.jpg" :
            alert("МУЛЬТФІЛЬМ СУПЕРСІМЕЙКА");
            break;
        default:
            console.log("Мультфільми");

    }
});
