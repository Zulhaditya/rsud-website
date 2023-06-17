import Admin from '../models/adminModel.js'

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findOne({
      username: req.body.username,
      password: req.body.password,
    })
    if (!admins)
      return res
        .status(401)
        .send({ message: 'Username atau Password tidak valid' })

    res.status(200).send({ message: 'Berhasil login!' })
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' })
  }
}
