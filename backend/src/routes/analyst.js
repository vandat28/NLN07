var express = require('express')
var router = express.Router()

const analystController = require("../app/controller/analystController")

router.get('/count-paid-7days', analystController.countOrdersPaidIn7Days)
router.get('/count-7days', analystController.countOrdersIn7Days)
router.get('/', analystController.analystIn7Days)






module.exports = router 