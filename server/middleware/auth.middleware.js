const jwt = require('jsonwebtoken')
const config = require('config')

const SECRET_KEY = config.get('secretKey')

const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res
                .status(401)
                .json({
                    message: 'User not authenticated'
                })
        }
        const {userId} = jwt.verify(token, SECRET_KEY)
        req.userId = userId
        next()
    } catch (e) {
        console.log(e)
        return res.json({
            message: 'Server error'
        })
    }
}

module.exports = authMiddleware
