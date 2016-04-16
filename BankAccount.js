function BankAccount(amt) {


	this.balance = Number(amt) || 0;

	this.deposit = function(amt){
		amt = Number(amt) || 0;
		this.balance += amt;
		return this.balance;
	}

	this.withdraw = function(amt) {
		amt = Number(amt) || 0;
		this.balance -= amt;
		return this.balance;
	}

}


var myAccount = new BankAccount("100");

console.log(myAccount.balance);
console.log(myAccount.deposit(1000));
console.log(myAccount.withdraw(1000));
