import mongoose from 'mongoose'

const Patient = mongoose.Schema({
  rm: {
    type: Number,
    required: true,
  },
  nik: {
    type: Number,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  klinik: {
    type: String,
    required: true,
  },
  jaminan: {
    type: String,
    required: true,
  },
  kunjungan: {
    type: String,
    required: true,
  },
  tempatLahir: {
    type: String,
    required: true,
  },
  tglLahir: {
    type: Date,
    required: true,
  },
  agama: {
    type: String,
    required: true,
  },
  pendidikan: {
    type: String,
    required: true,
  },
  pekerjaan: {
    type: String,
    required: true,
  },
  golDarah: {
    type: String,
    required: true,
  },
  jenis: {
    type: String,
    required: true,
  },
  provinsi: {
    type: String,
    required: true,
  },
  kota: {
    type: String,
    required: true,
  },
  kecamatan: {
    type: String,
    required: true,
  },
  kelurahan: {
    type: String,
    required: true,
  },
  jalan: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  suku: {
    type: String,
    required: true,
  },
  bahasa: {
    type: String,
    required: true,
  },
  namaPj: {
    type: String,
    required: true,
  },
  tglKunjungan: {
    type: Date,
    required: true,
  },
  dokterKunjungan: {
    type: String,
    required: true,
  },
  jadwalKunjungan: {
    type: Date,
    required: true,
  },
  noAsuransi: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('Patients', Patient)
