let company = {
    sales: [{name: "John", salary: 1000}, {name: "Alice", salary: 600}],
    development: {
        web: [{name: "Peter", salary: 2000}, {name: "Alex", salary: 1800}],
        internals: [{name: "Jack", salary: 1300}]
    }
};

function sumSalaries(element){
    let sum = 0;
    if (Array.isArray(element)){
        return element.reduce((prev, current) => prev + current.salary, 0);
    } else {
        for (let subdep of Object.values(element)){
            sum += sumSalaries(subdep);
        }
    }

    return sum;
}

console.log(sumSalaries(company));
