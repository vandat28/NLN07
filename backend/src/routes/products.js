var express = require('express')
var router = express.Router()

const products = require("../app/controller/productController")


router.get('/', products.findAll)
router.post('/', products.findAll)
router.put('/:id', products.findAll)
router.delete('/:id', products.findAll)





module.exports = router 