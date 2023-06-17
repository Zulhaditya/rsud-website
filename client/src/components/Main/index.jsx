import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Main = () => {
  const [patients, setPatient] = useState([])

  useEffect(() => {
    getPatients()
  }, [])

  const getPatients = async () => {
    const response = await axios.get('http://localhost:8080/patients')
    setPatient(response.data)
  }

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={12}>
          <Table size='md' className='mt-5 text-center'>
            <thead className='table-dark'>
              <tr>
                <th>No</th>
                <th>No RM</th>
                <th>NIK</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Klinik</th>
                <th>Cara Bayar</th>
                <th>Cara Daftar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient._id}>
                  <td>{index + 1}</td>
                  <td>{patient.rm}</td>
                  <td>{patient.nik}</td>
                  <td>{patient.nama}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.jaminan}</td>
                  <td>{patient.klinik}</td>
                  <td>{patient.kunjungan}</td>
                  <td>
                    <Button variant='primary' size='sm'>
                      Edit
                    </Button>
                    <Button variant='danger' size='sm'>
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
