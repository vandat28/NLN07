var express = require('express')
var router = express.Router()

const analystController = require("../app/controller/analystController")

router.get('/', analystController.analystIn7Days)






module.exports = router 