
let myArray = [4, 6, 7, "hillel", 456, "school"];

function myFunction (arr){
    let sum = 0;
    for(let i = 0; i < myArray.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }else{
            console.log("Not a Number");
        }
    }
    return sum / 4;

}

console.log(myFunction(myArray));

