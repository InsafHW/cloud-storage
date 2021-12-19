const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const authRouter = require('./routes/auth.routes')

const SERVER_PORT = config.get('serverPort')
const DB_URL = config.get('dbUrl')
const app = express()

app.use(express.json());
app.use('/api/auth', authRouter)

async function start() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(SERVER_PORT, () => {
            console.log('Server has been started on 5000 port')
        })
    }
    catch (e) {
        console.log(e.message)
    }
}

start()
