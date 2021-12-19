const Router = require('express')
const {body} = require('express-validator');
const authorizationController = require('../controllers/authorizationController')

const router = new Router()

router.post(
    '/registration',
    body('email', 'Email is invalid').isEmail(),
    body('password', 'Password length must be from 8 to 15').isLength({
        min: 8,
        max: 15,
    }),
    authorizationController.register
)

router.post(
    '/login',
    authorizationController.login
)

module.exports = router
