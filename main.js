const array = [1, 3, 4, 6, 2, 5, 7];
let twoArray = array.filter(function (arr){
    if (arr !== 4){
        return true;
    }else{
        return false;
    }

});
console.log(twoArray);
