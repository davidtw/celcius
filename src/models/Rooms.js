const _ = require('lodash')
const Room = require('./Room')

class Rooms {
    constructor(rooms) {
        this.rooms = _.map(rooms, room => {
            const radiators = room.radiators.radiators || room.radiators
            return new Room(room.name, radiators, room.temperatureTopic, room.id)
        })
    }

    update(room) {
        const id = room.id
        const roomIndex = _.findIndex(this.rooms, {id})
        if(roomIndex < 0) {
            this.rooms.push(room)
        } else {
            this.rooms.splice(roomIndex, 1, room)
        }
    }

    find(id) {
        return _.find(this.rooms, ['id', id])
    }

    forJson() {
        return _.map(this.rooms, room => {
            return room.forJson()
        })
    }

}

module.exports = Rooms