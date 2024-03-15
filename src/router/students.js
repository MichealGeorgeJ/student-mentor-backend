import express from 'express'
import studentController from '../controller/students.js'
const router = express.Router();

router.post('/create', studentController.createStudents)
router.get('/all', studentController.getAllStudents )


export default router