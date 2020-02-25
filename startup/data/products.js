const { ObjectID } = require('mongodb');
const { categories } = require('./categories');

const products = [
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Iphone',
        count: 10,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Galaxy S10',
        count: 0,
        price: 1200

    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Abra A5 V15.2.2 15.6" Oyun Bilgisayarı',
        count: 6,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Tulpar T7 V20.1 17.3 Tam Ekran16 Tulpar T7 V20.1 17.3" Oyun Bilgisayarı',
        count: 6,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'MSI Notebook',
        count: 8,
        price: 1200
    }, {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Asus Phone',
        count: 10,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Galaxsy s8',
        count: 4,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Vestel Venus',
        count: 6,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'Galaxy s3',
        count: 8,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[0]._id,
        name: 'IPad',
        count: 14,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[1]._id,
        name: 'Into the Wild',
        count: 4,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[1]._id,
        name: 'A Game of Thrones',
        count: 14,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[1]._id,
        name: 'Da Vinci Code',
        count: 16,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[1]._id,
        name: 'Code Complete',
        count: 14,
        price: 1200
    },
    {
        _id: new ObjectID(),
        categoryId: categories[1]._id,
        name: 'Dancing with Bears',
        count: 16,
        price: 1200
    }
];

module.exports = { products }