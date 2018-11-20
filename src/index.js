const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Config = require('./models/Config')
const apiRouter = require('./api/router')
const path = require('path')
const client = require('./mqtt/mqtt')

Config.loadFromStorage().then(config => {
        // if(!config.mqttOptions) {
        //     config.mqttOptions = {
        //         host: '192.168.1.84',
        //         port: '1883',
        //         username: 'david',
        //         password: 'tart!fl3tt3',
        //     }
        //     config.commit()
        // }
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
