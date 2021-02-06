import { Router } from 'express'
import { signup, login, signin } from '../_controllers/user'

const router = Router()

// login user
router.route('/login').post(login)
// user singup
router.route('/signup').post(signup)
// is user looged in
// router.route('/isLogin').post(isLoggedIn)
// signin with google
router.route('/signin').post(signin)

module.exports = router
