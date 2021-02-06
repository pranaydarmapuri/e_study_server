import { Router } from 'express'
import {
  getClassListOfFac
} from '../_controllers/faculty-page'

const router = Router()

router.route('/faculty/classes/:id').post(getClassListOfFac)

export default router