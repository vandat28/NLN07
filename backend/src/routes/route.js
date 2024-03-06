const products = require('./products')
const category = require('./category')
const account = require('./account')


function route(app) {
    app.use('/api/accounts', account)
    app.use('/api/products', products)
    app.use('/api/category', category)
}

module.exports = route