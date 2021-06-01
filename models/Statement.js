class Statement {
    constructor(amount, balance) {
        this.date = new Date(),
        this.amount = amount,
        this.balance = balance
    }
}

module.exports = Statement; 