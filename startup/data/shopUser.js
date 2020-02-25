const { ObjectID } = require('mongodb');

const shopUser = {
    _id: new ObjectID(),
    userName: 'shopUser1',
    password: 'a1234567',
    email:'aliemre1990@hotmail.com'
}

module.exports = {
    shopUser
}