const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Config = require('./models/Config')
const apiRouter = require('./api/router')

Config.loadFromStorage().then(config => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    apiRouter(app, express, config)

    const port = process.env.PORT || 4654

    app.listen(port)
    console.log(`Listening on port ${port}`)
})

