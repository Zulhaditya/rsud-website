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
    <Container className='mt-3'>
      <Row className='justify-content-md-center'>
        <h2>Data Pribadi</h2>
        <p>Lengkapi data pribadi pasien</p>
        <Col md={8} className='mb-5'>
          <Form onSubmit={savePatient}>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Jenis Pasien
              </Form.Label>
              <Col>
                <Form.Select
                  aria-label='Pilih'
                  // value={gender}
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Jenis-1'>Jenis 1</option>
                  <option value='Jenis-2'>Jenis 2</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                No RM
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan no rm'
                  value={rm}
                  onChange={(e) => setRm(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                NIK
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan NIK'
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Nama
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan nama'
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Gender
              </Form.Label>
              <Col>
                <Form.Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='L'>Pria</option>
                  <option value='P'>Wanita</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Tempat Lahir
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type='text'
                  placeholder='Masukkan tempat lahir'
                  // value={klinik}
                  // onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
              <Form.Label column sm={2} className='text-end g-0'>
                Tanggal Lahir
              </Form.Label>
              <Col>
                <Form.Control
                  type='date'
                  // value={klinik}
                  // onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Agama
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Islam'>Islam</option>
                  <option value='Protestan'>Protestan</option>
                  <option value='Katolik'>Katolik</option>
                  <option value='Hindu'>Hindu</option>
                  <option value='Buddha'>Buddha</option>
                  <option value='Khonghucu'>Khonghucu</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Pendidikan
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='SD'>SD</option>
                  <option value='SLTP'>SMP Sederajat</option>
                  <option value='SLTA'>SMA Sederajat</option>
                  <option value='D3'>D3</option>
                  <option value='S1'>S1</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Pekerjaan
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='PNS'>PNS</option>
                  <option value='Wiraswasta'>Wiraswasta</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Golongan Darah
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='O'>O</option>
                  <option value='AB'>AB</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Status Pernikahan
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Menikah'>Menikah</option>
                  <option value='Belum Menikah'>Belum Menikah</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Provinsi
              </Form.Label>
              <Col>
                <Form.Select
                  aria-label='Pilih'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='L'>Pria</option>
                  <option value='P'>Wanita</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Kabupaten/Kota
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type='text'
                  placeholder='Kabupaten/Kota'
                  // value={klinik}
                  // onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
              <Form.Label column sm={2} className='text-end'>
                Kecamatan
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Kecamatan'
                  // value={klinik}
                  // onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Kelurahan
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type='text'
                  placeholder='Kelurahan'
                  // value={klinik}
                  // onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
              <Form.Label column sm={2} className='text-end'>
                Jalan/Dusun
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Jalan'
                  // value={klinik}
                  // onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Alamat Domisili
              </Form.Label>
              <Col>
                <Form.Control
                  as='textarea'
                  placeholder='Masukkan alamat domisili'
                  style={{ height: '130px' }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                No Telp
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan no telp'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Suku
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan suku'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={3} className='text-end'>
                Bahasa
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan bahasa'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>
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
          </Form>
        </Col>
        <Row className='justify-content-md-center mb-5'>
          <h2>Data Penanggung Jawab</h2>
          <p>Lengkapi data penanggung jawab</p>
          <Col md={8}>
            <Form.Group as={Row}>
              <Form.Label column sm={3} className='text-end'>
                Nama
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan nama penanggung jawab'
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center mb-5'>
          <h2>Data Kunjungan</h2>
          <p>Lengkapi data kunjungan</p>
          <Col md={8}>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Tanggal
              </Form.Label>
              <Col>
                <Form.Control
                  type='date'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Klinik
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Penyakit Dalam'>Penyakit Dalam</option>
                  <option value='Paru'>Paru</option>
                  <option value='Gigi'>Gigi</option>
                  <option value='Gigi'>Mata</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Dokter
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Zulhaditya Sp.Pd'>Zulhaditya Sp.Pd.</option>
                  <option value='Inayah Sp.Pd'>Inayah Sp.Pd</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Jadwal
              </Form.Label>
              <Col>
                <Form.Control
                  type='date'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Cara Masuk
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Online'>Online</option>
                  <option value='Offline'>Offline</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={3} className='text-end'>
                Jaminan
              </Form.Label>
              <Col>
                <Form.Select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='Umum'>Umum</option>
                  <option value='Jamkesos'>Jamkesos</option>
                  <option value='Jamkesmas'>Jamkesmas</option>
                  <option value='Jasa Raharja'>Jasa Raharja</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={3} className='text-end'>
                No Asuransi
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan no asuransi'
                  // value={nama}
                  // onChange={(e) => setNama(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Row>
      <div className='d-grid d-md-flex justify-content-md-end mt-2'>
        <Form.Group>
          <Button variant='primary' type='submit'>
            Simpan
          </Button>
        </Form.Group>
      </div>
    </Container>
  )
}

export default AddPatient
