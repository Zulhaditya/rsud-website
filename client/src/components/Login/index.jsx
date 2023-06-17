import { useState } from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import logo from '../../assets/hospital.png'
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
    <div className={styles.login_container}>
      <div className={styles.circle_left}></div>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <img src={logo} alt='hospital' className={styles.logo} />
          <h1 className={styles.title}>Halaman Masuk</h1>
          <p className={styles.title_secondary}>Selamat Datang Kembali</p>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <div className={styles.form_input}>
              <span className={styles.icon}>
                {' '}
                <FaUserAlt aria-hidden='true' />{' '}
              </span>
              <input
                placeholder='Username'
                name='username'
                onChange={handleChange}
                value={data.username}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.form_input}>
              <span className={styles.icon}>
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
                className={styles.input}
              />
            </div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type='submit' className={styles.submit_btn}>
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
