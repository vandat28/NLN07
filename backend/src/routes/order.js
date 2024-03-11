var express = require('express')
var router = express.Router()

const orderController = require("../app/controller/orderController")


router.get('/history', orderController.findAllByCustomerId)
router.get('/detail', orderController.findOneById)
router.post('/', orderController.create)
// router.put('/:id', orderController.update)
// router.delete('/:id', orderController.delete)





module.exports = router 