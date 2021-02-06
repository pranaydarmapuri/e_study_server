import noti from '../_controllers/Notification'
import { Router } from 'express'

const router = Router()

router.route('/add').post(noti.add)
router.route('/get-by-fac/:id').post(noti.getBySender)
router.route('/get-by-sec/:id').post(noti.getBySection)
router.route('/delete/:id').post(noti.delete)

export default router