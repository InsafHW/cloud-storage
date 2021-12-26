const {Schema, ObjectId, model} = require('mongoose')

const fileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    accessLink: {
        type: String
    },
    size: {
        type: Number,
        default: 0
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    parentId: {
        type: ObjectId,
        ref: 'File'
    },
    children: [{
        type: ObjectId,
        ref: 'File'
    }],
    path: {
        type: String,
        default: ''
    }
})

module.exports = model('File', fileSchema)
