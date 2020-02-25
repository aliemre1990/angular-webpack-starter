const { ObjectID } = require('mongodb');

const systemUser = {
    _id: new ObjectID(),
    userName: 'systemUser1',
    password: 'a1234567',
    email: 'aliemre1990@hotmail.com'
}

module.exports = {
    systemUser
}