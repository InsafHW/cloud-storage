const fs = require('fs')
const File = require('../models/File')
const config = require('config')

const STORAGE_PATH = config.get('storagePath')

class FileService {
    createDir(file) {
        return new Promise((resolve, reject) => {
            try {
                let path = STORAGE_PATH + `\\${file.userId}\\${file.path}`
                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path, {recursive: true})
                    return resolve({
                        message: 'Dir successfully has been created'
                    })
                } else {
                    return reject({
                        message: 'Dir already exist'
                    })
                }
            } catch (e) {
                console.log(e)
                return resolve({
                    message: 'CreateDir error'
                })
            }
        })
    }
}

module.exports = new FileService()
