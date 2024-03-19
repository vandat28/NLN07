const feedbackService = require('../service/feedbackService')

class feedbackController {
    async findAll(req, res) {
        let data = await feedbackService.findAll()
        res.json(data)
    }

    async findAllById(req, res) {
        let id = req.params.id
        let data = await feedbackService.findAllById(id)
        res.json(data)
    }
    // async create(req, res) {
    //     let account = req.body
    //     if (account) {
    //         await feedbackService.createCustomer(account.name, account.address, account.gender,
    //             account.yob, account.phone)
    //         let customer = await feedbackService.findOneByPhoneNumber(account.phone)
    //         await feedbackService.createAccount(account.phone, account.passwd, customer[0].maKH)
    //         res.json(customer)
    //     } else {
    //         res.json('Thất bại')
    //     }
    // }

    // async update(req, res) {
    //     let id = req.params.id
    //     let newCategoryName = req.body.newCategoryName
    //     if (id && newCategoryName) {
    //         let data = await feedbackService.update(newCategoryName, id)
    //         res.json(data)
    //     } else {
    //         res.json("Xóa thất bại")
    //     }
    // }
    // async delete(req, res) {
    //     let id = req.params.id
    //     if (id) {
    //         let data = await feedbackService.delete(id)
    //         res.json(data)
    //     } else {
    //         res.json("Xóa thất bại")
    //     }

    // }

}
module.exports = new feedbackController()