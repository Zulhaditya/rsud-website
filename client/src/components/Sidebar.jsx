import { useState } from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { AiFillRightCircle } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import logoHospital from '../assets/logo-hospital.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-56' : 'w-24 '
        } bg-blue-900 px-3 pt-8 relative duration-300`}
      >
        <AiFillRightCircle
          className={`absolute cursor-pointer -right-3 top-9
          text-3xl text-white ${!open ? 'rotate-180 text-white' : undefined}`}
          onClick={() => setOpen(!open)}
        />

        <div className='flex gap-x-4 items-center'>
          <Link to={'/main'}>
            <img
              src={logoHospital}
              alt='sidebar'
              className={!open ? 'scale-0 duration-100' : undefined}
            />
          </Link>
        </div>

        <div className='mt-10 text-slate-300'>
          <h1
            className='text-sm font-semibold cursor-pointer'
            onClick={() => setOpen(!open)}
          >
            MENU
          </h1>
          <div className='flex gap-2 mt-3 hover:text-white hover:font-semibold'>
            <BsPeopleFill />
            <Link to={'/input'} className={!open ? 'hidden' : undefined}>
              <h2>Pendaftaran</h2>
            </Link>
          </div>
          <div className='flex gap-2 mt-2 hover:text-white hover:font-semibold'>
            <BiTime />
            <Link to={'/main'} className={!open ? 'hidden' : undefined}>
              <h2>Batalkan Kunjungan</h2>
            </Link>
          </div>
        </div>

        <div className='mt-4 text-slate-300'>
          <h1
            className='text-sm font-semibold cursor-pointer'
            onClick={() => setOpen(!open)}
          >
            LAINNYA
          </h1>
          <div className='flex gap-2 mt-3 hover:text-white hover:font-semibold'>
            <ImExit className='hover:text-white' />
            <Link to={'/'} className={!open ? 'hidden' : undefined}>
              <h2>Keluar</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
