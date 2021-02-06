import { Router } from 'express'
import {
  timetable,
  home
} from '../_controllers/student-page'

const router = Router()

// routes

router.route('/student/timetable/:id').post(timetable)
router.route('/student/home/:id').post(home)


//export
export default router