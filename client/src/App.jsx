import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import AddMessageForm from './components/AddMessageForm'
import Logs from './components/Logs'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/new-message' element={<AddMessageForm />} />
        <Route path='/logs' element={<Logs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
