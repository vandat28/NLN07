const productService = require('../service/productService')
class products {
    async findAll(req, res) {
        let data = await productService.findALl()
        res.json(data)
    }

    async create(req, res) {
        let data = await productService.create()
        res.json(data)
    }
    async update(req, res) {
        let data = await productService.update()
        res.json(data)
    }
    async delete(req, res) {
        let data = await productService.delete()
        res.json(data)
    }

}

module.exports = new products()