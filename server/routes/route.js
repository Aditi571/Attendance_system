const express=require('express')
const router=express.Router()

const controller=require('../controllers/controller')
const { authmiddleware } = require('../middlewares/auth-middleware')


router.route('/').get(controller.home)
router.route('/register').post(controller.register)
router.route('/login').post(controller.login)
router.route('/fetch_names').get(controller.fetch_names)
router.route('/saveAttendance').post(controller.saveAttendance)
router.route('/userdetails').get(authmiddleware,controller.fetch_dashboard_details);

module.exports=router