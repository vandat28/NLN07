var express = require('express')
var router = express.Router()

const feedbackController = require("../app/controller/feedbackController")

router.get('/:id', feedbackController.findAllById)
router.get('/', feedbackController.findAll)
// router.post('/', feedbackController.create)
// router.put('/:id', feedbackController.update)
// router.delete('/:id', feedbackController.delete)





module.exports = router 