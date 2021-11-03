/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.nextAccountNumber++;
    this.accounts.push(newAccount);
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts.length + 1 > number) {
    return this.accounts[number - 1];
  } else {
    return null;
  }
};

Bank.prototype.getTotalAssets = function () {
  var sumOfBankAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    sumOfBankAssets += this.accounts[i].getBalance();
  }
  return sumOfBankAssets;
};
