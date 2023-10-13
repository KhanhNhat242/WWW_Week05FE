import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './component/company/Company'
import Home from './component/home/Home'
import Header from './component/header/Header'
import Job from './component/job/Job'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/job' element={<Job />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
