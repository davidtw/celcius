const Radiator = require('../models/Radiator')
module.exports = function(router, config) {
    router.get('/radiators/:roomId', function(req, res) {
        const roomId = req.params.roomId
        const room = config.rooms.find(roomId)
        res.json(room.radiators.forJson())
    })

    router.post('/radiator/:roomId', function(req, res) {
        const roomId = req.params.roomId
        const room = config.rooms.find(roomId)
        if(room) {
            const name = req.body.name
            const mqttTopic = req.body.mqttTopic
            const radiator = new Radiator(name, mqttTopic)
            room.radiators.update(radiator)
            config.rooms.update(room)
            config.commit()
            res.json({message: 'Radiator added'})
        } else {
            res.json({message: `The room with id ${roomId} doesn't exist`})
        }
    })

    router.put('/radiator/:roomId/:id', function(req, res) {
        const roomId = req.params.roomId
        const room = config.rooms.find(roomId)
        const id = req.params.id
        const name = req.body.name
        const mqttTopic = req.body.mqttTopic
        const radiator = room.radiators.find(id)
        radiator.name = name
        radiator.mqttTopic = mqttTopic
        room.radiators.update(radiator)
        config.rooms.update(room)
        config.commit()
        res.json({ message: 'Radiator updated' })
    })
}