const products = require('./products')
const category = require('./category')

function route(app) {
    app.use('/api/products', products)
    app.use('/api/category', category)
}

module.exports = route