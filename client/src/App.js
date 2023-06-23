import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Input from './components/Input'
import Edit from './components/Edit'
import TablePatient from './components/Table'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<TablePatient />} />
        <Route path='/input' element={<Input />} />
        <Route path='edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
