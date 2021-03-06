/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && (amount > 0)) {
    var depositTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var sumOfDeposits = 0;
  var sumOfWithdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      sumOfDeposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      sumOfWithdrawals += this.transactions[i].amount;
    }
  }
  var balance = sumOfDeposits - sumOfWithdrawals;
  return balance;
};
