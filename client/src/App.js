import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'
import Input from './components/Input'
import Edit from './components/Edit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/input' element={<Input />} />
        <Route path='edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  )
}

export default App
