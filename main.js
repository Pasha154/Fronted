const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const orderForm = document.querySelector("#orderForm")
const userInfo = {};

function validateForm(){
    let isValid = true;

    if (!userInfo.firstName){
        document.querySelector("#firstNameError").innerHTML = "Обов'язкове текстове поле!";
        isValid = false;
    }
    if (userInfo.commentMessage.length < 5){
        document.querySelector("#textareaError").innerHTML= "Текстове поле не менше 5 символів"
        isValid = false;
    }
    if (!userInfo.phoneNumber){
        document.querySelector("#phoneError").innerHTML = "Введіть номер телефону!"
        isValid = false;
    }else if (!phoneRegex.test(userInfo.phoneNumber)){
        document.querySelector("#phoneError").innerHTML = "Введіть валідний номер телефону +(380)";
        isValid = false;
    }
    if (!userInfo.userEmail){
        document.querySelector("#gmailError").innerHTML = "Email є обов'язковим полем!"
        isValid = false;
    }else if (!emailRegex.test(userInfo.userEmail)){
        document.querySelector("#gmailError").innerHTML = "Ви пропустили @ або крапку"
        isValid = false;
    }
    return isValid;
}

function clearErrors(){
    document.querySelector("#firstNameError").innerHTML = "";
    document.querySelector("#textareaError").innerHTML = "";
    document.querySelector("#phoneError").innerHTML = "";
    document.querySelector("#gmailError").innerHTML = "";
}
orderForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    clearErrors();
     userInfo.firstName = document.querySelector("#firstName").value;
    userInfo.commentMessage = document.querySelector("#comment").value;
     userInfo.phoneNumber = document.querySelector("#telephone").value;
     userInfo.userEmail = document.querySelector("#gmail").value;

    if (validateForm()){
        console.log("User Date:", userInfo);
    }else{
        console.log("Date isn't valid!");
    }
})