const e = require('express');
const orderService = require('../service/orderService')
class orderController {
    // async findAll(req, res) {
    //     let data = await accountService.findAll()
    //     res.json(data)
    // }

    async create(req, res) {
        const order = req.body;
        try {
            // Tạo đơn hàng chính
            await orderService.createOrder(order.tongTien, 0, order.maKH, 1);
            const orderId = await orderService.findOrderId();
            // Lặp qua từng sản phẩm trong đơn hàng và tạo chi tiết đơn hàng cho mỗi sản phẩm
            for (const product of order.sanPham) {
                await orderService.createOrderDetail(product.id, orderId[0].id, product.quantity);
            }

            res.status(200).json({ message: 'Đã tạo đơn hàng thành công.' });
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }
    }


    async findAllByCustomerId(req, res) {
        try {
            const maKH = req.query.id
            let orders = await orderService.findAllByCustomerId(maKH)
            res.status(200).json(orders);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }
    }

    async findOneById(req, res) {
        try {
            const maDH = req.query.id
            let order = await orderService.findOneById(maDH)
            res.status(200).json(order);
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo đơn hàng.' });
        }
    }

    // async update(req, res) {
    //     let id = req.params.id
    //     let newCategoryName = req.body.newCategoryName
    //     if (id && newCategoryName) {
    //         let data = await accountService.update(newCategoryName, id)
    //         res.json(data)
    //     } else {
    //         res.json("Xóa thất bại")
    //     }
    // }
    // async delete(req, res) {
    //     let id = req.params.id
    //     if (id) {
    //         let data = await accountService.delete(id)
    //         res.json(data)
    //     } else {
    //         res.json("Xóa thất bại")
    //     }

    // }

}
module.exports = new orderController()