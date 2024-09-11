let wholeNumber = +prompt("Введіть ціле число від 1 до 100 :");

let i = 1;

while(i<=100){
    let square = i*i;
    if (square <= wholeNumber){
        console.log(i);
    } else{
        break;
    }
    i++;
}