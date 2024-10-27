class bankAccount{
    constructor(balance) {
        this.balance = balance;

    }
    getBalance(){
        return this.balance;
    }
    deposit(dep){
        return this.balance += dep;
    }
    withdraw(antidep){
        return this.balance -= antidep;
}

}

const account1 = new bankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
