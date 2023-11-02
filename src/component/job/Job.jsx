import { useState } from 'react';
import './Job.scss'
import axios from 'axios';

function Job({ jobs, isLogIn }) {
    const [block, setBlock] = useState('none')
    const [job, setJob] = useState({
        jobName: '',
        jobDesc: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target

        setJob({...job, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:8080/addJob', job)
    }

    // console.log(jobs)

    return (
        <div className='job-container'>
            {
                jobs.map((j) => {
                    return (
                        <>
                            <div className="job-wrapper">
                                <div className='job-left'>
                                    <h1 className="skill-level">ADVANCE</h1>
                                </div>
                                <div className="job-right">
                                    <h2 className="job-name">Tuyển DEV {j.jobName}</h2>
                                    <h4 className="company-name">Công ty {j.company.compName}</h4>
                                    <p className="jd">{j.jobDesc}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <button className='addJobBtn' style={{display: `${isLogIn ? 'block' : 'none'}`}} onClick={() => setBlock('block')}>Thêm việc làm mới</button>
            <div className="modal" style={{display: `${block}`}}>
                <div className="modal-content">
                    <span className="close" onClick={() => setBlock('none')}>&times;</span>
                    {/* <p>Some text in the Modal..</p> */}
                    <h2 className='add-job-title'>Thêm việc làm mới</h2>
                    <form className='form-job-wrapper'>
                        <div className='input-wrapper'>
                            <label className='form-job-label'>Tên: </label>
                            <input className='form-job-input' type='text' name='jobName' onChange={handleInput} />
                        </div>
                        <div className='input-wrapper'>
                            <label className='form-job-label'>JD: </label>
                            <textarea className='form-job-input' name='jobDesc' rows='4' onChange={handleInput}></textarea>
                        </div>
                    </form>
                    <button className='add-job-btn' onClick={(e) => {
                        handleSubmit(e)
                        setBlock('none')    
                    }}>Thêm</button>
                </div>
            </div>
        </div>
     );
}

export default Job;