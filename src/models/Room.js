const Radiators = require('./Radiators')
const _ = require('lodash')

class Room {
    constructor(name, radiators, temperatureTopic, id = null) {
        this.name = name
        this.radiators = new Radiators(radiators)
        this.temperatureTopic = temperatureTopic
        this.id = id || _.uniqueId()
    }

    forJson() {
        const id = this.id
        const name = this.name
        const radiators = this.radiators.forJson()
        const temperatureTopic = this.temperatureTopic
        return { id, name, radiators, temperatureTopic }
    }
}

module.exports = Room