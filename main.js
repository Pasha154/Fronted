const colorChange = document.querySelector("#clrchange");
const btnSubmit = document.querySelector("#btnSubmit");
const lorem = document.querySelector(".lorem");

colorChange.style.maxWidth = '1200px';
colorChange.style.backgroundColor = 'aqua';


let oldColour = false;

btnSubmit.addEventListener('click',  () => {

    if (oldColour){
        lorem.style.color = "red";
    } else {
        lorem.style.color = "black";
    }
    oldColour = !oldColour;

});
