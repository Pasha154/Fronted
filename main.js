
function createSum(){
    let numeric = 0

    return function (num){
        numeric += num;
        console.log(numeric);
    }
}
const sumFunction = createSum();
sumFunction(4);
sumFunction(10);
sumFunction(50);