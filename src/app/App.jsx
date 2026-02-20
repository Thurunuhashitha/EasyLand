import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home/Home'
import AllLand from '../pages/AllLand/AllLand'
import AddLand from '../pages/AddLand/AddLand'
import Contact from '../pages/Contact/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'        element={<Home />}    />
        <Route path='/allLand' element={<AllLand />} />
        <Route path='/addLand' element={<AddLand />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
