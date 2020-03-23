require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const port = process.env.PORT || 4000

app.use(express.urlencoded( { extended: false } ))
app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`)
})