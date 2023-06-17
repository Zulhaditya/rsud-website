import mongoose from 'mongoose'

const Admin = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

export default mongoose.model('Admins', Admin)
