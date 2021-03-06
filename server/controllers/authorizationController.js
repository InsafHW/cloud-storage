const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const File = require('../models/File')
const fileService = require('../services/fileService')

const SECRET_KEY = config.get('secretKey')
const TOKEN_EXPIRATION = '1h'

class AuthorizationController {
    async register(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()})
            }

            const {email, password, firstName, lastName} = req.body
            const candidate = await User.findOne({email})

            if (candidate) {
                return res
                    .status(400)
                    .json({message: `User with email ${email} already exist`})
            }

            const hashedPassword = await bcrypt.hash(password, 7)
            const user = new User({
                email,
                password: hashedPassword,
                firstName,
                lastName
            })
            await user.save()
            await fileService.createDir(new File({
                userId: user._id,
                name: ''
            }))

            const token = jwt.sign({
                userId: user._id
            }, SECRET_KEY, {
                expiresIn: TOKEN_EXPIRATION
            })
            return res
                .json({
                    token,
                    message: 'User was created',
                    user: {
                        email,
                        firstName,
                        lastName,
                        id: user._id,
                        diskSpace: user.diskSpace,
                        usedSpace: user.usedSpace
                    }
                })
        } catch (e) {
            console.log(e)
            res.json({message: 'Server error'})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const candidate = await User.findOne({email})

            if (!candidate) {
                return res
                    .status(404)
                    .json({
                        message: 'User not found'
                    })
            }

            const match = await bcrypt.compare(password, candidate.password)
            if (match) {
                const token = jwt.sign({
                    userId: candidate._id
                }, SECRET_KEY, {
                    expiresIn: TOKEN_EXPIRATION
                })

                return res.json({
                    token,
                    user: {
                        id: candidate._id,
                        email: candidate.email,
                        diskSpace: candidate.diskSpace,
                        usedSpace: candidate.usedSpace,
                        firstName: candidate.firstName,
                        lastName: candidate.lastName
                    }
                })
            }

            return res.status(401).json({
                message: 'Invalid password'
            })
        } catch (e) {
            console.log(e)
            res.json({message: 'Server error'})
        }
    }

    async auth(req, res) {
        try {
            const {userId} = req
            if (!userId) {
                return res.json({
                    message: 'User not authenticated'
                })
            }
            const user = await User.findOne({_id: userId})
            const token = jwt.sign({
                userId
            }, SECRET_KEY, {
                expiresIn: TOKEN_EXPIRATION
            })

            return res.json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            })
        } catch (e) {
            console.log(e)
            res.json({message: 'Server error'})
        }
    }
}

module.exports = new AuthorizationController()
