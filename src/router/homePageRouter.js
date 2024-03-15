import express from 'express'
import homePage from '../controller/homePageController.js'
import mentorRoutes from './mentor.js'
import studentsRoutes from './students.js'
import commonRouter from './common.js'

const router=express.Router()

router.get('/',homePage.homePage)
router.use('/students',studentsRoutes)
router.use('/mentors',mentorRoutes)
router.use('/common',commonRouter)

export default router