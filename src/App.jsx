import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Company from './component/company/Company'
import Home from './component/home/Home'
import Header from './component/header/Header'
import Job from './component/job/Job'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Employer from './component/employer/Employer'
import PickUser from './component/logIn/pickUser/PickUser'
import LogIn from './component/logIn/LogIn'

function App() {

  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])
  const [isLogIn, setIsLogIn] = useState(false)

  const handleLogIn = () => {
    setIsLogIn(true)
  }

  const handleSignOut = () => {
    setIsLogIn(false)
  }

  const getData = async () => {
    const jobs = await axios.get('http://localhost:8080/getAllJob')
    const companies = await axios.get('http://localhost:8080/getAllCompany')

    setJobs(jobs.data)
    setCompanies(companies.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <Router>
        <Header isLogIn={isLogIn} handleSignOut={handleSignOut}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company companies={companies} />} />
          <Route path='/job' element={<Job jobs={jobs} isLogIn={isLogIn} />} />
          <Route path='/employer' element={<Employer />} />
          <Route path='/log-in' element={<PickUser />} />
          <Route path='/log-in/employer' element={<LogIn onLogIn={handleLogIn} />} />
          <Route path='/log-in/candidate' element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
