class Client {
    constructor(accountId, name, city, contactInfo) {
        this.accounts = [accountId], 
        this.name = name, 
        this.city = city, 
        this.contactInfo = contactInfo, 
        this.clientId = Math.floor(Math.random() * 1000)
    }
}

module.exports = Client; 