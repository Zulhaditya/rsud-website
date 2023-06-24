import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'

import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPatient = () => {
  const [rm, setRm] = useState('')
  const [nik, setNik] = useState('')
  const [nama, setNama] = useState('')
  const [gender, setGender] = useState('')
  const [klinik, setKlinik] = useState('')
  const [jaminan, setJaminan] = useState('')
  const [kunjungan, setKunjungan] = useState('')
  const navigate = useNavigate()

  const savePatient = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/patients', {
        rm,
        nik,
        nama,
        gender,
        jaminan,
        klinik,
        kunjungan,
      })
      navigate('/main')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container mt-3'>
      <div>
        <h2>Data Pribadi</h2>
        <p>Lengkapi data pribadi pasien</p>
        <div className='mb-5 flex justify-center'>
          <form onSubmit={savePatient}>
            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Jenis Pasien</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={jenis}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option selected>Pilih</option>
                  <option value='Jenis-1'>Jenis 1</option>
                  <option value='Jenis-2'>Jenis 2</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>No RM</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan no rm'
                  value={rm}
                  onChange={(e) => setRm(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>NIK</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan NIK'
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Nama</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan nama'
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Gender</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option selected>Pilih</option>
                  <option value='L'>Pria</option>
                  <option value='P'>Wanita</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-52 px-[15px] mr-1'>
                <h2>Tempat Lahir</h2>
              </div>
              <div className='w-64'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan tempat lahir'
                  // value={}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className='text-end px-3 w-1/4'>
                <h2>Tanggal Lahir</h2>
              </div>
              <div className='w-1/4'>
                <input
                  type='date'
                  className='form-input'
                  // value={}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Agama</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Islam'>Islam</option>
                  <option value='Protestan'>Protestan</option>
                  <option value='Katolik'>Katolik</option>
                  <option value='Hindu'>Hindu</option>
                  <option value='Buddha'>Buddha</option>
                  <option value='Khonghucu'>Khonghucu</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Pendidikan</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='SD'>SD</option>
                  <option value='SLTP'>SMP Sederajat</option>
                  <option value='SLTA'>SMA Sederajat</option>
                  <option value='D3'>D3</option>
                  <option value='S1'>S1</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Pekerjaan</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='PNS'>PNS</option>
                  <option value='Wiraswasta'>Wiraswasta</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Golongan Darah</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='AB'>AB</option>
                  <option value='O'>O</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Status Pernikahan</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Menikah'>Menikah</option>
                  <option value='Belum Menikah'>Belum Menikah</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Provinsi</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Kepulauan Riau'>Kepulauan Riau</option>
                  <option value='Jakarta'>DKI Jakarta</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-52 px-[15px] mr-1'>
                <h2>Kabupaten/Kota</h2>
              </div>
              <div className='w-64'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Kabupaten/kota'
                  // value={}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className='text-end px-3 w-1/4'>
                <h2>Kecamatan</h2>
              </div>
              <div className='w-1/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Kecamatan'
                  // value={}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-52 px-[15px] mr-1'>
                <h2>Kelurahan</h2>
              </div>
              <div className='w-64'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Kelurahan'
                  // value={}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className='text-end px-3 w-1/4'>
                <h2>Jalan/dusun</h2>
              </div>
              <div className='w-1/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Jalan/dusun'
                  // value={}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex mb-3'>
              <div className='text-end w-1/4 px-3 py-[12px]'>
                <h2>Alamat Domisili</h2>
              </div>
              <div className='w-3/4'>
                <textarea
                  className='form-input'
                  placeholder='Masukkan alamat domisili'
                  style={{ height: '130px' }}
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>No Telp</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan nomor telp'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Suku</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan suku'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Bahasa</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan bahasa'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            {/* <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={2} className='text-end'>
                Klinik
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan Klinik'
                  value={klinik}
                  onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={2} className='text-end'>
                Cara Bayar
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Cara Bayar'
                  value={jaminan}
                  onChange={(e) => setJaminan(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={2} className='text-end'>
                Kunjungan
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Cara Kunjungan'
                  value={kunjungan}
                  onChange={(e) => setKunjungan(e.target.value)}
                />
              </Col>
            </Form.Group> */}

            <div className='absolute left-3'>
              <h2>Data Penanggung Jawab</h2>
              <p>Lengkapi data penanggung jawab</p>
            </div>

            <div className='flex justify-center items-center mt-20'>
              <div className='text-end w-1/4 px-3'>
                <h2>Nama</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan nama'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='absolute left-3'>
              <h2>Data Kunjungan</h2>
              <p>Lengkapi data kunjungan</p>
            </div>

            <div className='flex justify-center items-center mt-20 mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Tanggal</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='date'
                  className='form-input'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Klinik</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Penyakit Dalam'>Penyakit Dalam</option>
                  <option value='Paru'>Paru</option>
                  <option value='Gigi'>Gigi</option>
                  <option value='Gigi'>Mata</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Dokter</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Zulhaditya Sp.Pd'>Zulhaditya Sp.Pd.</option>
                  <option value='Inayah Sp.Pd'>Inayah Sp.Pd</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Jadwal</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='date'
                  className='form-input'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Cara Masuk</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Online'>Online</option>
                  <option value='Offline'>Offline</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>Jaminan</h2>
              </div>
              <div className='w-3/4'>
                <select
                  class='form-select'
                  // value={}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Umum'>Umum</option>
                  <option value='Jamkesos'>Jamkesos</option>
                  <option value='Jamkesmas'>Jamkesmas</option>
                  <option value='Jasa Raharja'>Jasa Raharja</option>
                </select>
              </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
              <div className='text-end w-1/4 px-3'>
                <h2>No Asuransi</h2>
              </div>
              <div className='w-3/4'>
                <input
                  type='text'
                  className='form-input'
                  placeholder='Masukkan no asuransi'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='d-grid d-md-flex justify-content-md-end mt-2'>
        <Form.Group>
          <Button variant='primary' type='submit'>
            Simpan
          </Button>
        </Form.Group>
      </div>
    </div>
  )
}

export default AddPatient
