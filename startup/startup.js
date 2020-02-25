const bcrypt = require('bcrypt');

const database = require('../server/database/database');
const { categories } = require('./data/categories');
const { products } = require('./data/products');
const { systemUser } = require('./data/systemUser');
const { shopUser } = require('./data/shopUser');

async function setStartupData() {

    console.log('Check if data exists in database.');
    var systemUserCollection = await database.getCollection(database.collectionNames.systemUsers);
    var systemUserCount = await systemUserCollection.countDocuments();

    // If no category exists insert startup data
    if (systemUserCount <= 0) {
        console.log('Adding startup data...')

        systemUser.password = bcrypt.hashSync(systemUser.password, bcrypt.genSaltSync());
        var insertSystemUserResult = await systemUserCollection.insertOne(systemUser);

        if (process.env.NODE_ENV !== 'production') {

            shopUser.password = bcrypt.hashSync(shopUser.password, bcrypt.genSaltSync())
            var shopUserCollection = await database.getCollection(database.collectionNames.shopUsers);
            var insertShopUserResult = await shopUserCollection.insertOne(shopUser);

            categories.forEach(x => {
                x.active = true;
                x.createdAt = new Date();
                x.createdBy = insertSystemUserResult.ops[0]._id;
            });
            var categoryCollection = await database.getCollection(database.collectionNames.categories);
            var insertCategoryResult = await categoryCollection.insertMany(categories);

            var productCollection = await database.getCollection(database.collectionNames.products);
            var insertProductResult = await productCollection.insertMany(products);
        }
        console.log('Added startup data.');
    } else {
        console.log('Data already exists in database. No data is inserted.')
    }
}

module.exports = {
    setStartupData
}