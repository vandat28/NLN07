const productService = require('../service/productService')


class products {
    async findAll(req, res) {
        try {
            let data = await productService.findALl()
            res.json(data)
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }

    }

    async create(req, res) {
        let product = req.body
        let avatar = req.file.filename
        if (product) {
            let data = await productService.create(product.name, product.price, product.description,
                product.quantity, product.category, avatar)
            res.json(data)
        } else {
            res.json('Thất bại')
        }
    }
    async update(req, res) {
        let data = await productService.update()
        res.json(data)
    }
    async delete(req, res) {
        let id = req.params.id
        if (id) {
            let data = await productService.delete(id)
            res.json(data)
        } else {
            res.json("Xóa thất bại")
        }
    }
    async findAllByCategoryId(req, res) {
        let categoryId = req.params.id
        let data = await productService.findAllByCategoryId(categoryId)
        res.json(data)
    }

    async findOneById(req, res) {
        let id = req.params.id
        let data = await productService.findOneById(id)
        res.json(data)
    }

    async findAllByName(req, res) {
        try {
            const searchTxt = req.query.searchTxt
            let products = await productService.findAllByName(searchTxt)
            res.status(200).json(products);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }
    }

    async findAllByQuantity(req, res) {
        try {
            let products = await productService.findAllByQuantity()
            res.status(200).json(products);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }
    }

}

module.exports = new products()