const expect = require('chai').expect

const Rooms = require('../../src/models/Rooms')

describe('Room collection test', function () {
    it('should create an empty room collection', function () {
        const rooms = new Rooms([])

        expect(rooms.rooms.length).to.equal(0)
    })

    it('should create a correct room collection', function () {
        const rooms = new Rooms([
            {id: 1, name: 'room 1', radiators: [], temperatureTopic: '/room/1'},
            {id: 2, name: 'room 2', radiators: [], temperatureTopic: '/room/2'},
        ])

        expect(rooms.rooms.length).to.equal(2)
        expect(rooms.rooms[0]).to.be.an('object')
        expect(rooms.rooms[1]).to.be.an('object')
    })

    describe('Rooms find', function () {
        it('should return the correct room', function () {
            const room1 = {id: 1, name: 'room 1', radiators: [], temperatureTopic: '/room/1'}
            const room2 = {id: 2, name: 'room 2', radiators: [], temperatureTopic: '/room/2'}
            const rooms = new Rooms([room1, room2])
            const found = rooms.find(2)
            const notFound = rooms.find(3)

            expect(rooms.rooms.length).to.equal(2)
            expect(found.id).to.equal(2)
            expect(notFound).to.be.undefined
        })
    })

    describe('Rooms update', function () {
        it('should create a correct room collection', function () {
            const room1 = {id: 1, name: 'room 1', radiators: [], temperatureTopic: '/room/1'}
            const room2 = {id: 2, name: 'room 2', radiators: [], temperatureTopic: '/room/2'}
            const rooms = new Rooms([])
            expect(rooms.rooms.length).to.equal(0)
            rooms.update(room1)
            expect(rooms.rooms.length).to.equal(1)
            expect(rooms.rooms[0].name).to.equal(room1.name)
            rooms.update(room2)
            room1.name = 'changed room 1'
            rooms.update(room1)
            expect(rooms.rooms.length).to.equal(2)
            expect(rooms.rooms[0].name).to.equal(room1.name)
        })
    })

    describe('Room forJson', function () {
        it('should return an array of json data', function () {
            const room1 = {id: 1, name: 'room 1', radiators: [], temperatureTopic: '/room/1'}
            const room2 = {id: 2, name: 'room 2', radiators: [], temperatureTopic: '/room/2'}
            const rooms = new Rooms([room1, room2])
            const expectedData = JSON.stringify([room1, room2])

            expect(JSON.stringify(rooms.forJson())).to.equal(expectedData)
        })
    })
})