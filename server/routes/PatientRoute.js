import express from 'express'
import {
  getPatients,
  getPatientById,
  savePatient,
  updatePatient,
  deletePatient,
} from '../controllers/PatientController.js'

const router = express.Router()

router.get('/patients', getPatients)
router.get('/patients/:id', getPatientById)
router.post('/patients', savePatient)
router.patch('/patients/:id', updatePatient)
router.delete('/patients/:id', deletePatient)

export default router
