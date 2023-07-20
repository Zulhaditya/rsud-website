import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import PatientRoute from './routes/PatientRoute.js'

import AdminRoute from './routes/adminRoute.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB)
    console.log(`MongDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use(AdminRoute)
app.use(PatientRoute)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Listening for requests...')
  })
})
