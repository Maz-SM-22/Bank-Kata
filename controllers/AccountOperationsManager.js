// Business logic related to the account

const Account = require('../models/Account'); 
const Client = require('../models/Client'); 
const ContactInfo = require('../models/ContactInfo'); 
const Statement = require('../models/Statement');

let fakeAccount = new Account(); 
fakeAccount.balance = 8000000000.00; 

exports.open = (req, res) => {
    let account = new Account();
    let client = new Client (account.accountId, req.body.name, req.body.city, 
        new ContactInfo(req.body.contactInfo.phone, req.body.contactInfo.email)); 
}

exports.withdrawal = (req, res, next) => {
    if (fakeAccount.accountId!==req.body.accountId) {
        next(new Error(`Account with id: ${accountId} does not exist`));
    }
    fakeAccount.balance -= req.body.amount;
    fakeAccount.statements.push(new Statement(req.body.amount, fakeAccount.balance));
}

exports.deposit = (req, res, next) => {
    if (fakeAccount.accountId!==req.body.accountId) {
        next(new Error(`Account with id: ${accountId} does not exist`));
    }
    fakeAccount.balance += req.body.amount;
    fakeAccount.statements.push(new Statement(req.body.amount, fakeAccount.balance));
}

exports.close = (req, res) => {
    
}