function myFunction (first, second){
    return first + second;
}

console.log(myFunction(4,5));

function name(first){
    return function (second){
        return first + second;

    }
}

console.log(name(5)(2));