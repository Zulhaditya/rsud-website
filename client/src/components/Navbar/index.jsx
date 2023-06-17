import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

export const Navigasi = () => {
  return (
    <Container>
      <Navbar>
        <h3>RSUD WONOSARI</h3>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Zulhaditya <BsPersonCircle className='mx-2' />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col>
          <AiOutlineRight className='mb-1' />{' '}
          <p className='d-inline'>Pendaftaran</p>
        </Col>
      </Row>
    </Container>
  )
}
