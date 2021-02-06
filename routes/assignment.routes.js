import { Router } from 'express'
import assignment from '../_controllers/assignment'

const router = Router()

// routes
router.route('/add').post(assignment.add)
router.route('/get-by-student/:id').post(assignment.getByStudent)
router.route('/get-by-faculty/:id').post(assignment.getByFaculty)
router.route('/delete/:id').post(assignment.delete)


// export
export default router