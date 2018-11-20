const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Config = require('./models/Config')
const apiRouter = require('./api/router')
const path = require('path')
const client = require('./mqtt/mqtt')

Config.loadFromStorage().then(config => {
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        console.log(config.rooms)
        apiRouter(app, express, config)
        client(config)
        const port = process.env.PORT || 4654

        app.use('/', express.static(path.join(__dirname, 'www')))
        app.listen(port)
        console.log(`Listening on port ${port}`)
})
