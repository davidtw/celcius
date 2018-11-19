const uuidv1 = require('uuid/v1')

class Radiator {
    constructor(name, mqttTopic, id = null) {
        this.name = name
        this.mqttTopic = mqttTopic
        this.id = id || uuidv1()
    }

    forJson() {
        const id = this.id
        const name = this.name
        const mqttTopic = this.mqttTopic
        return {id, name, mqttTopic}
    }
}

module.exports = Radiator