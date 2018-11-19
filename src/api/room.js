const Room = require('../models/Room')
module.exports = function(router, config) {
    router.get('/rooms', function(req, res) {
        res.json(config.rooms.toJsonString())
    })

    router.post('/room', function(req, res) {
        const name = req.body.name;
        const temperatureTopic = req.body.temperatureTopic;
        const room = new Room(name, [], temperatureTopic)
        config.rooms.update(room)
        config.commit()
        res.json({ message: 'Room added' })
    })

    router.put('/room/:id', function(req, res) {
        const id = req.params.id
        const room = config.rooms.find(id)
        const name = req.body.name;
        const temperatureTopic = req.body.temperatureTopic;
        room.name = name
        room.temperatureTopic = temperatureTopic
        config.rooms.update(room)
        config.commit()

        res.json({ message: 'Room updated' })
    })
}