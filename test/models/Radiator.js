const expect = require('chai').expect

const Radiator = require('../../src/models/Radiator')

describe('Radiator test', () => {
    it('should create a radiator object', () => {
        const name = 'test'
        const mqttTopic = '/test'
        const id = 1
        const radiator = new Radiator(name, mqttTopic, id)
        const radiator1 = new Radiator(name, mqttTopic)

        expect(radiator.name).to.equal(name)
        expect(radiator.mqttTopic).to.equal(mqttTopic)
        expect(radiator.id).to.equal(id)

        expect(radiator1.name).to.equal(name)
        expect(radiator1.mqttTopic).to.equal(mqttTopic)
        expect(radiator1.id).to.not.be.undefined
    })

    describe('forJson', () => {
        it('should return data', () => {
            const name = 'test'
            const mqttTopic = '/test'
            const id = 1
            const radiator = new Radiator(name, mqttTopic, id)
            const data = radiator.forJson()

            expect(data.name).to.equal(name)
            expect(data.mqttTopic).to.equal(mqttTopic)
            expect(data.id).to.equal(id)
        })
    })
})