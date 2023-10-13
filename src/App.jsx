import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './component/company/Company'
import Home from './component/home/Home'
import Header from './component/header/Header'
import Job from './component/job/Job'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [jobs, setJobs] = useState([])

  const getData = async () => {
    const jobs = await axios.get('http://localhost:8080/getAllJob')
    setJobs(jobs.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/job' element={<Job jobs={jobs} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
