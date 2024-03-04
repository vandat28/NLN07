const express = require('express')
const app = express()
const path = require('path')

const port = 5000

var cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//public 
app.use(express.static(path.join(__dirname, '/public')))

const route = require('./routes/route')
route(app)

app.listen(port, () => console.log(`server running at port ${port}`))
