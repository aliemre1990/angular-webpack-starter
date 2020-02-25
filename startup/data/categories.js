const { ObjectID } = require('mongodb');

const categories = [
    {
        _id: new ObjectID(),
        name: 'Electronic'
    },
    {
        _id: new ObjectID(),
        name: 'Book'
    }
]


module.exports = {
    categories
}