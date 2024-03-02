const products = require('./products')

function route(app) {
    app.use('/api/products', products)
}

module.exports = route