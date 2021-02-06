import notes from '../_controllers/Notes/index'
import { Router } from 'express'

const router = Router()

router.route('/add').post(notes.add)
router.route('/get/fac/:id').post(notes.getByFac)
router.route('/get/sec/:id').post(notes.getBySec)
router.route('/get').post(notes.get)
router.route('/delete/:id').post(notes.delete)

export default router