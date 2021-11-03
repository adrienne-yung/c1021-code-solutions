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

/* Input: Given a possible client trying to open an account
Output: Assign him an account / open account
step1: Check if they got $ in the first place, else 'im wahhking here'
step2: That money better be a whole number cause we a picky bank that doesn't accept cents
step3: Create an account and grace client with an account number
step4: Take all their money
step5: Put that account and their money with the rest of the other future accounts
step6: Thank you, next. Take the next account number +1
step7: When done, holder and account details should be assigned to an account number and returned. */
