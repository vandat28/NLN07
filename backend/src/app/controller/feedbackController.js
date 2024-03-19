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
    async createFeedBack(req, res) {
        let feedBack = req.body
        if (feedBack) {
            let result = await feedbackService.createFeedBack(feedBack.comment, feedBack.evaluate, feedBack.SpID, feedBack.UserID)
            res.json(result)
        } else {
            res.json('Thất bại')
        }
    }

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