const fileService = require('../services/fileService')
const File = require('../models/File')
const User = require('../models/User')

class FileController {
    async getFiles(req, res) {
        try {
            const {userId} = req
            console.log(req.query.parent)
            const files = await File.find({userId, parentId: req.query.parent})
            return res.json(files)
        } catch (e) {

        }
    }

    async createDir(req, res) {
        try {
            const {name, type, parent} = req.body
            const {userId} = req
            const file = new File({
                name,
                type,
                parentId: parent,
                userId
            })
            const parentFile = await File.findOne({_id: parent})
            if (!parentFile) {
                file.path = name
                await fileService.createDir(file)
            } else {
                file.path = `${parentFile.path}\\${file.name}`
                await fileService.createDir(file)
                parentFile.children.push(file._id)
                await parentFile.save()
            }
            await file.save()
            return res.json(file)
        } catch (e) {
            console.log(e)
            return res.json(e)
        }
    }
}

module.exports = new FileController()

