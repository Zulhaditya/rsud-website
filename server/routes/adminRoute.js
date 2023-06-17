import express from 'express'
import { getAdmins } from '../controllers/AdminController.js'

const router = express.Router()

router.post('/admins', getAdmins)

export default router
