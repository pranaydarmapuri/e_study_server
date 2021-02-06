import { Router } from 'express'
import circular from '../_controllers/circular'

const router = Router()

// router
router.route('/add').post(circular.add)
router.route('/delete/:id').post(circular.delete)
router.route('/get').post(circular.get)

// exports
export default router