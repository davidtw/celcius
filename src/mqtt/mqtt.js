const mqtt = require('mqtt')
const _ = require('lodash')

module.exports = (config) => {
    if (config.mqttOptions) {
        console.log('connecting mqtt')
        const host = `${config.mqttOptions.protocol || 'mqtt'}://${config.mqttOptions.host}`
        const port = config.mqttOptions.port
        const username = config.mqttOptions.username
        const password = config.mqttOptions.password
        const clientId = config.mqttOptions.clientId || _.uniqueId('celcius_client_')
        const options = {
            host,
            port,
            username,
            password,
            clientId
        }
        const client = mqtt.connect(host, options)
        client
            .on('connect', () => {
                console.log('mqtt connected')
            })
            .on('error', (err) => console.error(err))
        return client
    }
    console.log('no mqtt options set')
    return false
}