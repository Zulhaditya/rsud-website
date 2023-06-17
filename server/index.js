import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import PatientRoute from './routes/PatientRoute.js'

// const authRoutes = require('./routes/adminRoute.js')
import AdminRoute from './routes/adminRoute.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8080

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(process.env.DB, connectionParams)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Berhasil terhubung ke database!'))

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use(AdminRoute)
app.use(PatientRoute)

app.listen(port, () => console.log(`Server berjalan di port ${port}`))
