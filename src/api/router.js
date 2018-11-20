const room = require('./room')
const radiator = require('./radiator')
const _ = require('lodash')
function router(app, express, config) {
    const router = express.Router()

    // router.get('/', (req, res) => {
    //     res.json({ message: 'Yeay!!' })
    // })
    room(router, config)
    radiator(router, config)
    app.use('/api', router)
}

module.exports = router