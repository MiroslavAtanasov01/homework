require('dotenv').config()

require('./config/database')().then(() => {
    const config = require('./config/config')
    const app = require('express')()

    require('./config/express')(app)
    require('./config/routes')(app)

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))
})