const {Schema, ObjectId, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    diskSpace: {
        type: Number,
        default: 1024 ** 3 * 10
    },
    usedSpace: {
        type: Number,
        default: 0
    },
    files: [{
        type: ObjectId,
        ref: 'File'
    }]
})

module.exports = model('User', userSchema)
