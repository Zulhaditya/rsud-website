import { useState } from 'react'
import axios from 'axios'
import logo from '../assets/hospital.png'
import { FaUnlock, FaUserAlt } from 'react-icons/fa'

const Login = () => {
  const [data, setData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = 'http://localhost:8080/admins'
      const { data: res } = await axios.post(url, data)
      window.location = '/main'
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#002b5b] via-[#002b5b] to-[#2f495f] font-poppins'>
      <div className='w-[500px] h-[520px] flex'>
        <div className='flex flex-[2_2_0%] flex-col items-center justify-center bg-white rounded-[30px]'>
          <img src={logo} alt='hospital' className='w-[200px] h-[150px] mb-4' />
          <h1 className='text-2xl font-bold mb-1'>Halaman Masuk</h1>
          <p className='text-[14px] text-slate-500 mb-10'>
            Selamat Datang Kembali
          </p>
          <form className='flex flex-col items-center' onSubmit={handleSubmit}>
            <div className='mb-2 relative flex items-center justify-center'>
              <span className='absolute left-[17px] top-0 text-[20px] text-blue-950 h-full flex items-center justify-center'>
                {' '}
                <FaUserAlt aria-hidden='true' />{' '}
              </span>
              <input
                placeholder='Username'
                name='username'
                onChange={handleChange}
                value={data.username}
                required
                className='block box-border w-[370px] bg-transparent border-[1.2px] text-sm mx-0 my-0.5 pl-[50px] pr-[15px] py-[15px] rounded-[10px] border-[#002b5b] outline-none'
              />
            </div>
            <div className='mb-2 relative flex items-center justify-center'>
              <span className='absolute left-[17px] top-0 text-[20px] text-blue-950 h-full flex items-center justify-center'>
                {' '}
                <FaUnlock aria-hidden='true' />{' '}
              </span>
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={data.password}
                required
                className='block box-border w-[370px] bg-transparent border-[1.2px] text-sm mx-0 my-0.5 pl-[50px] pr-[15px] py-[15px] rounded-[10px] border-[#002b5b] outline-none'
              />
            </div>
            {error && (
              <div className='w-full text-sm bg-[#f34646] text-[white] text-center mx-0 my-[5px] p-[5px] rounded-[5px]'>
                {error}
              </div>
            )}
            <button
              type='submit'
              className='w-full mt-[7px] p-2 rounded-lg text-white bg-[#002b5b] font-poppins font-semibold'
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
