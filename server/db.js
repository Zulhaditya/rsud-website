const mongoose = require('mongoose')

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  try {
    mongoose.connect(process.env.DB, connectionParams)
    console.log('Berhasil terhubung ke database')
  } catch (error) {
    console.log(error)
    console.log('Gagal terhubung ke database!')
  }
}
