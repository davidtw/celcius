const Rooms = require('./Rooms')
const storage = require('node-persist')

class Config {
    constructor(rooms, mqttOptions) {
        console.log(rooms)
        if(rooms) {
            this.rooms = new Rooms(rooms)
        } else {
            this.rooms = new Rooms([])
        }
        this.mqttOptions = mqttOptions
    }

    commit() {
        storage.setItem('rooms', this.rooms)
        storage.setItem('mqttOptions', this.mqttOptions)
    }

    static async loadFromStorage() {
        await storage.init()
        const rooms = await storage.getItem('rooms')
        const mqttOptions = await storage.getItem('mqttOptions')
        return new Config(rooms.rooms, mqttOptions)
    }
}

module.exports = Config