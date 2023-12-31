import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'
import { HiViewList } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import Sidebar from '../components/Sidebar'
import { DateRangePicker } from 'react-date-range'

const itemsPerPage = 5

const Main = () => {
  const [patients, setPatient] = useState([])
  const [allPatients, setAllPatients] = useState([])
  const [showDelete, setShowDelete] = useState(false)
  const [selectedPatientId, setSelectedPatientId] = useState(null)
  const [namePatient, setNamePatient] = useState(null)
  const [openDate, setOpenDate] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [searchPatients, setSearchPatients] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const handleOnClose = () => setShowDelete(false)

  const refOne = useRef(null)

  useEffect(() => {
    getPatients()
    setCurrentPage(1)

    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  // GET data pasien
  const getPatients = async () => {
    try {
      const response = await axios.get('https://hospital.cyclic.app/patients')
      setAllPatients(response.data)

      const filteredPatients = response.data.filter(
        (patient) =>
          patient.nama.toLowerCase().includes(searchPatients.toLowerCase()) ||
          patient.klinik.toLowerCase().includes(searchPatients.toLowerCase())
      )
      setPatient(filteredPatients)

      const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)
      setTotalPages(totalPages)
    } catch (error) {
      console.log(error)
    }
  }

  // DELETE data pasien
  const deletePatient = async (id) => {
    try {
      await axios.delete(`https://hospital.cyclic.app/patients/${id}`)
      getPatients()
    } catch (error) {
      console.log(error)
    }
  }

  // handle select date
  const handleSelect = (date) => {
    let filtered = allPatients.filter((patient) => {
      let patientDate = new Date(patient.tglKunjungan)
      return (
        patientDate >= date.selection.startDate &&
        patientDate <= date.selection.endDate
      )
    })
    setStartDate(date.selection.startDate)
    setEndDate(date.selection.endDate)
    setPatient(filtered)
  }

  // object selection range date
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  // hide date on click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenDate(false)
    }
  }

  // filtered search patients
  const getFilteredPatients = () => {
    if (!searchPatients) return patients
    return patients.filter((patient) => {
      return (
        patient.nama.toLowerCase().includes(searchPatients) ||
        patient.klinik.toLowerCase().includes(searchPatients)
      )
    })
  }

  const filteredPatients = getFilteredPatients()

  const handlePageChange = (page) => {
    setCurrentPage(page)
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentPatients = allPatients.slice(startIndex, endIndex)
    setPatient(currentPatients)
  }

  return (
    <div className='font-poppins bg-[#EEF3F7] flex text-sm'>
      <Sidebar />
      <div className='flex-1 pb-7 min-h-screen'>
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
          <div className='mr-6'>
            <div className='mb-3'>
              <h2 className='font-semibold text-lg'>
                Tentukan batas kunjungan
              </h2>
              <p className='text-slate-500'>Berdasarkan waktu kunjungan.</p>
            </div>
            <input
              readOnly
              placeholder='Pilih tanggal'
              onClick={() => setOpenDate((openDate) => !openDate)}
              className='px-3.5 py-1.5 rounded-lg mb-3 cursor-pointer'
            />
            <div ref={refOne}>
              {openDate && (
                <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                />
              )}
            </div>
          </div>
          <div className='ml-7 text-sm'>
            <div className='mb-3'>
              <h2 className='font-semibold text-lg'>Cari Data Pasien</h2>
              <p className='text-slate-500'>Berdasarkan Nama dan Klinik.</p>
            </div>
            <input
              type='text'
              placeholder='Cari ....'
              className='px-3.5 py-1.5 rounded-lg w-full'
              onChange={(e) => {
                const keyword = e.target.value.toLowerCase()
                setSearchPatients(keyword)
                const filteredPatients = allPatients.filter(
                  (patient) =>
                    patient.nama.toLowerCase().includes(keyword) ||
                    patient.klinik.toLowerCase().includes(keyword)
                )
                setPatient(filteredPatients)

                const totalPages = Math.ceil(
                  filteredPatients.length / itemsPerPage
                )
                setTotalPages(totalPages)
                setCurrentPage(1)
              }}
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
              {filteredPatients.length === 0 && (
                <tr>
                  <td
                    colSpan={10}
                    className='justify-center bg-blue-950 text-white font-semibold p-3'
                  >
                    Data tidak ditemukan
                  </td>
                </tr>
              )}

              {filteredPatients.map((patient, index) => (
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
                  <td className='px-3'>{patient.klinik}</td>
                  <td className='px-3'>{patient.jaminan}</td>
                  <td>{patient.kunjungan}</td>
                  <td className='px-3'>
                    <div className='grid grid-cols-3 gap-2'>
                      <Link to={`/edit/${patient._id}`}>
                        <MdEdit className='text-lg hover:text-slate-500' />
                      </Link>
                      <Link to={`/show/${patient._id}`}>
                        <HiViewList className='text-lg hover:text-slate-500' />
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedPatientId(patient._id)
                          setNamePatient(patient.nama)
                          setShowDelete(true)
                        }}
                      >
                        <RiDeleteBack2Fill className='text-xl text-red-500 hover:text-red-900' />
                      </button>
                    </div>

                    {showDelete && (
                      <div className='fixed inset-0 bg-slate-300 bg-opacity-30 backdrop-blur[2px] flex justify-center items-center'>
                        <div className='bg-white p-2 rounded w-[404px] h-[175px]'>
                          <div className='flex justify-center py-1'>
                            <p className='font-semibold text-lg'>
                              Konfirmasi !
                            </p>
                          </div>
                          <hr />
                          <div className='flex justify-center py-3'>
                            <p>
                              Apakah anda yakin menghapus data pasien "
                              {namePatient}" ?
                            </p>
                          </div>
                          <div className='flex justify-center gap-3'>
                            <button
                              onClick={handleOnClose}
                              className='border-slate-600 border-1 rounded-xl font-semibold w-40 p-2 text-slate-700'
                            >
                              Tidak
                            </button>
                            <button
                              onClick={() => {
                                deletePatient(selectedPatientId)
                                handleOnClose()
                              }}
                              className='rounded-xl font-semibold w-40 p-2 bg-red-600 text-white'
                            >
                              Ya, Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center mt-4'>
          <nav className='inline-flex rounded-md shadow'>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-l-md ${
                currentPage === 1 ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-r-md ${
                currentPage === totalPages ? 'bg-gray-200' : 'bg-white'
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Main
