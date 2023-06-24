import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Input from './pages/InputPatient'
import Edit from './pages/EditPatient'
import Main from './pages/Main'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/input' element={<Input />} />
        <Route path='edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
