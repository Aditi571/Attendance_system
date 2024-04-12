const express=require('express')
const router=express.Router()

const controller=require('../controllers/controller')

router.route('/').get(controller.home)
router.route('/register').post(controller.register)
router.route('/login').post(controller.login)
router.route('/fetch_names').get(controller.fetch_names)

module.exports=router