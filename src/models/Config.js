const Rooms = require('./Rooms')
const storage = require('node-persist')

class Config {
    constructor(rooms) {
        if(rooms) {
            this.rooms = new Rooms(rooms)
        } else {
            this.rooms = new Rooms([])
        }
    }

    commit() {
        storage.setItem('rooms', this.rooms)
    }

    static async loadFromStorage() {
        await storage.init()
        const rooms = storage.getItem('rooms')
        return new Config(rooms)
    }
}

module.exports = Config