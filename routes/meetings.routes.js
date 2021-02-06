import {
  add,
  edit,
  remove
} from '../_controllers/meetings'

import { Router } from 'express'

const router = Router()

router.route('/add').post(add)
router.route('/edit/:id').post(edit)
router.route('/remove/:id').post(remove)


export default router