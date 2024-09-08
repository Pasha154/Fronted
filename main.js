let mostlyNumber = prompt("Введіть трьохзначне число:");
let realNumber = +mostlyNumber;


let oneNumber = Math.floor(realNumber / 10 / 10);
let firstNumber = oneNumber % 10;
let twoNumber = Math.floor(realNumber / 10);
let secondNumber = twoNumber % 10;
let thirdNumber = Math.ceil(realNumber % 10);


 if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber){
     console.log("Усі три числа однакові!");
 } else{
     console.log("Три числа не однакові");
 }
  if (firstNumber === secondNumber){
     console.log("Перше число однакове з другим");
 } else if (firstNumber === thirdNumber){
     console.log("Перше число однакове з третім");
 }else if (secondNumber === thirdNumber){
     console.log("Друге число однакове з третім");
 }else {
     console.log("Ви впоралися!");
 }