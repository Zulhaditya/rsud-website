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
        <Col md={7}>
          <Form onSubmit={savePatient}>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={2} className='text-end'>
                No RM
              </Form.Label>
              <Col>
                <Form.Control
                  // className='form-control'
                  type='text'
                  placeholder='Masukkan RM'
                  value={rm}
                  onChange={(e) => setRm(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={2} className='text-end'>
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
            <Form.Group as={Row}>
              <Form.Label column sm={2} className='text-end'>
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
            <Form.Group as={Row} className='mb-2'>
              <Form.Label column sm={2} className='text-end g-1 pt-3'>
                Jenis Kelamin
              </Form.Label>
              <Col>
                <Form.Select
                  aria-label='Pilih Jenis Kelamin'
                  className='mt-3 mb-2'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value='L'>Pria</option>
                  <option value='P'>Wanita</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className='text-end'>
                Tempat Lahir
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='Masukkan tempat lahir'
                  value={klinik}
                  onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
              <Form.Label column sm={2} className='text-end'>
                Tanggal Lahir
              </Form.Label>
              <Col>
                <Form.Control
                  type='text'
                  placeholder='DD/MM/YYYY'
                  value={klinik}
                  onChange={(e) => setKlinik(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={2} className='text-end'>
                Agama
              </Form.Label>
              <Col>
                <Form.Select
                  aria-label='Pilih Jenis Kelamin'
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
              <Form.Label column sm={2} className='text-end'>
                Pendidikan
              </Form.Label>
              <Col>
                <Form.Select
                  aria-label='Pilih Jenis Kelamin'
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
              <Form.Label column sm={2} className='text-end'>
                Pekerjaan
              </Form.Label>
              <Col>
                <Form.Select
                  aria-label='Pilih Jenis Kelamin'
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
              <Form.Label column sm={2} className='text-end'>
                Golongan Darah
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
              <Form.Label column sm={2} className='text-end'>
                Status Pernikahan
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
              <Form.Label column sm={2} className='text-end'>
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
            </Form.Group>

            <Form.Group>
              <Button variant='primary' className='mt-2' type='submit'>
                Simpan
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AddPatient
