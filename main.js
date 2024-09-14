let ourString = "Hello, world!";

function newString (){
   let oneString =  ourString.replace("ll", "").replace("d", "");
    return oneString;
}
console.log(newString());