let userBirthday = +prompt("Введіть Ваш  вік:");
let userCity = prompt("В якому місті проживаєте:");
let userSport = prompt("Ваш улюблений вид спорту?");

let result = "";

if (userCity === null){
    result+="Шкода що Ви не хочете вводити свій вік...\n";
} else {
    switch (userCity) {
        case "Київ":
            result += "Ти живеш у столиці України!\n";
            break;

        case "Лондон":
            result += "Ти живеш у столиці Англії!\n";
            break;

        case "Вашингтон":
            result += "Ти живеш в столиці США\n";
            break;

        default:
            result += `Ти живеш у місті: ${userCity}\n`;
            break;
    }
}


if (userSport) {
    if (userSport === "Футбол") {
        result+="Круто! Хочеш стати Ліонелем Мессі?\n";
    } else if (userSport === "Бокс") {
        result+="Круто! Хочеш стати Олександрем Усиком?\n";
    } else if (userSport === "UFC") {
        result+="Круто! Хочеш стати Конором МакГрегором?\n";
    } else  {
        result+="Крутий вибір, стань найкращим у цьомц спорті!\n";
    };

}else{
    result+="Шкода що Ви не хочете вводити свій улюблений спорт...\n";
}

if (!userBirthday){
    result += "Шкода що Ви не хочете вводити свій вік...\n";
}


result += `Ваш вік: ${userBirthday}, Ваше місто: ${userCity}, Ваш улюблений вид спорту: ${userSport}`;

console.log(result);
