const expect = require('chai').expect

const Radiators = require('../../src/models/Radiators')

describe('Radiators collection test', function () {
    it('should create an empty radiator collection', function () {
        const radiators = new Radiators([])

        expect(radiators.radiators.length).to.equal(0)
    })

    it('should create a correct radiator collection', function () {
        const radiators = new Radiators([
            {id: 1, name: 'radiator 1', mqttTopic: '/radiator/1'},
            {id: 2, name: 'radiator 2', mqttTopic: '/radiator/2'},
        ])
        expect(radiators.radiators.length).to.equal(2)
        expect(radiators.radiators[0]).to.be.an('object')
        expect(radiators.radiators[1]).to.be.an('object')
    })

    describe('Radiators find', function () {
        it('should return the correct radiator', function () {
            const radiator1 = {id: 1, name: 'radiator 1', mqttTopic: '/radiator/1'}
            const radiator2 = {id: 2, name: 'radiator 2', mqttTopic: '/radiator/2'}
            const radiators = new Radiators([radiator1, radiator2])
            const found = radiators.find(2)
            const notFound = radiators.find(3)

            expect(radiators.radiators.length).to.equal(2)
            expect(found.id).to.equal(2)
            expect(notFound).to.be.undefined
        })
    })

    describe('Radiators update', function () {
        it('should create a correct radiator collection', function () {
            const radiator1 = {id: 1, name: 'radiator 1', mqttTopic: '/radiator/1'}
            const radiator2 = {id: 2, name: 'radiator 2', mqttTopic: '/radiator/2'}
            const radiators = new Radiators([])
            expect(radiators.radiators.length).to.equal(0)
            radiators.update(radiator1)
            expect(radiators.radiators.length).to.equal(1)
            expect(radiators.radiators[0].name).to.equal(radiator1.name)
            radiators.update(radiator2)
            radiator1.name = 'changed radiator 1'
            radiators.update(radiator1)
            expect(radiators.radiators.length).to.equal(2)
            expect(radiators.radiators[0].name).to.equal(radiator1.name)
        })
    })

    describe('Radiators forJson', function () {
        it('should return an array of json data', function () {
            const radiator1 = {id: 1, name: 'radiator 1', mqttTopic: '/radiator/1'}
            const radiator2 = {id: 2, name: 'radiator 2', mqttTopic: '/radiator/2'}
            const radiators = new Radiators([radiator1, radiator2])
            const expectedData = JSON.stringify([radiator1, radiator2])

            expect(JSON.stringify(radiators.forJson())).to.equal(expectedData)
        })
    })
})