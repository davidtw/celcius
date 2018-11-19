const expect = require('chai').expect

const Room = require('../../src/models/Room')

describe('Room test', () => {
    it('should create a room object', () => {
        const name = 'test'
        const temperatureTopic = '/test'
        const id = 1
        const room = new Room(name, [], temperatureTopic, id)
        const room1 = new Room(name, [], temperatureTopic)

        expect(room.name).to.equal(name)
        expect(room.radiators).to.be.an('object')
        expect(room.temperatureTopic).to.equal(temperatureTopic)
        expect(room.id).to.equal(id)

        expect(room1.name).to.equal(name)
        expect(room1.radiators).to.be.an('object')
        expect(room1.temperatureTopic).to.equal(temperatureTopic)
        expect(room1.id).to.not.be.undefined
    })

    describe('forJson', () => {
        it('should return data', () => {
            const name = 'test'
            const temperatureTopic = '/test'
            const id = 1
            const room = new Room(name, [], temperatureTopic, id)
            const data = room.forJson()

            expect(data.name).to.equal(name)
            expect(data.radiators).to.be.an('Array')
            expect(data.temperatureTopic).to.equal(temperatureTopic)
            expect(data.id).to.equal(id)
        })
    })
})