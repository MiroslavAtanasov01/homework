const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
    return mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true, })
}