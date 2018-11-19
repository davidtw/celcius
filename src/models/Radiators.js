const _ = require('lodash')
const Radiator = require('./Radiator')

class Radiators {

    constructor(radiators) {
        this.radiators = _.map(radiators, radiator => new Radiator(radiator.name, radiator.mqttTopic, radiator.id))
    }

    update(radiator) {
        const id = radiator.id
        const radiatorsIndex = _.findIndex(this.radiators, {id})
        if(radiatorsIndex < 0) {
            this.radiators.push(radiator)
        } else {
            this.radiators.splice(radiatorsIndex, 1, radiator)
        }
    }

    find(id) {
        return _.find(this.radiators, ['id', id])
    }

    forJson() {
        return _.map(this.radiators, radiator => {
            return radiator.forJson()
        })
    }
}

module.exports = Radiators