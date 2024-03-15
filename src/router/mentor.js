import express from 'express'
import mentorController from '../controller/mentor.js'
const router = express.Router();

router.post('/create',mentorController.createMentor)
router.get('/all',mentorController.getAllMentors)

export default router;