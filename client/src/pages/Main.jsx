import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'
import { AiOutlineFile } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import Sidebar from '../components/Sidebar'

const Main = () => {
  const [patients, setPatient] = useState([])

  useEffect(() => {
    getPatients()
  }, [])

  const getPatients = async () => {
    const response = await axios.get('http://localhost:8080/patients')
    setPatient(response.data)
  }

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/patients/${id}`)
      getPatients()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='font-poppins bg-[#EEF3F7] flex text-sm'>
      <Sidebar />
      <div className='flex-1 pb-7'>
        <div className='py-3 px-10 overflow-auto bg-white'>
          <h1 className='text-xl font-bold float-left text-[#002B5B]'>
            RSUD WONOSARI
          </h1>
          <div className='float-right py-1'>
            <h2 className='float-left mr-2 py-0.5 font-semibold text-[#002B5B]'>
              Zulhaditya
            </h2>
            <FaUserCircle className='text-xl text-slate-300' />
          </div>
        </div>
        <div className='px-10 py-2 bg-[#F9FBFC] font-semibold flex text-[#002B5B] gap-1 shadow-sm'>
          <AiOutlineRight className='text-lg' />
          <h1>Pendaftaran</h1>
        </div>

        <div className='mb-7 pt-10 px-10'>
          <h1 className='float-left text-xl font-semibold border-b-2 border-[#159895]'>
            Daftar Pasien
          </h1>
          <Link
            to='/input'
            type='button'
            className='float-right text-white bg-[#159895] hover:bg-[#107a78] rounded-xl text-sm px-3 py-1.5'
          >
            Tambah Pasien +
          </Link>
          <div className='clear-both'></div>
        </div>
        <div className='flex mb-10 px-10'>
          <div className='mr-6 text-sm'>
            <h2 className='mb-2.5 text-[#A8A8A8]'>Cari data sejak tanggal</h2>
            <input
              type='date'
              className='border-b border-[#159895] w-48 bg-transparent'
            />
          </div>
          <div className='text-sm'>
            <h2 className='mb-2.5 text-[#A8A8A8]'>hingga batas tanggal</h2>
            <input
              type='date'
              className='border-b border-[#159895] w-48 bg-transparent'
            />
          </div>
          <div className='grid grid-cols-2 gap-2 ml-16 text-sm'>
            <input
              type='text'
              placeholder='Masukkan No RM ....'
              className='px-3.5 py-1 rounded-lg'
            />
            <input
              type='text'
              placeholder='Masukkan NIK ....'
              className='px-3.5 py-1 rounded-lg'
            />
            <input
              type='text'
              placeholder='Masukkan Nama ....'
              className='px-3.5 py-1 rounded-lg'
            />
            <input
              type='text'
              placeholder='Masukkan Klinik ....'
              className='px-3.5 py-1 rounded-lg'
            />
          </div>
        </div>
        <div className='px-9'>
          <table className='w-full text-center bg-white'>
            <thead className='bg-blue-900 text-white'>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>No RM</th>
                <th scope='col'>NIK</th>
                <th scope='col'>Nama</th>
                <th scope='col'>Jenis Kelamin</th>
                <th scope='col'>Klinik</th>
                <th scope='col'>Cara Bayar</th>
                <th scope='col' className='px-3 py-3'>
                  Cara Daftar
                </th>
                <th scope='col' className='px-3 py-3'>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient._id} className='border-b-1 shadow-sm'>
                  <th
                    scope='row whitespace-nowrap'
                    className='px-4 py-3 font-medium'
                  >
                    {index + 1}
                  </th>
                  <td>{patient.rm}</td>
                  <td className='px-3'>{patient.nik}</td>
                  <td>{patient.nama}</td>
                  <td>{patient.gender}</td>
                  <td className='px-3'>{patient.jaminan}</td>
                  <td className='px-3'>{patient.klinik}</td>
                  <td>{patient.kunjungan}</td>
                  <td className='px-3'>
                    <div className='grid grid-cols-3 gap-2'>
                      <Link to={`/edit/${patient._id}`}>
                        <MdEdit className='text-xl' />
                      </Link>
                      <button>
                        <AiOutlineFile className='text-xl' />
                      </button>
                      <button onClick={() => deletePatient(patient._id)}>
                        <MdDeleteOutline className='text-2xl' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Main
