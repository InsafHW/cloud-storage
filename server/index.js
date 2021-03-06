const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')

const SERVER_PORT = config.get('serverPort')
const DB_URL = config.get('dbUrl')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/file', fileRouter)

async function start() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(SERVER_PORT, () => {
            console.log('Server has been started on 5000 port')
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()
