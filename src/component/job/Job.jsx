import { useState } from 'react';
import './Job.scss'
import axios from 'axios';

function Job({ isLogIn, jobSkills }) {
    const [block, setBlock] = useState('none')
    const [job, setJob] = useState({
        jobName: '',
        jobDesc: '',
    })
    const [skill, setSkill] = useState({
        skillType: 0,
        skillDesc: '',
        skillName: '',
    })
    const [jobSKill, setJobSkill] = useState({
        skillLevel: 1,
        moreInfo: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target

        setJob({...job, [name]: value})
        setSkill({...skill, [name]: value})
        setJobSkill({...jobSKill, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(job)
        // console.log(skill)
        // console.log(jobSKill)

        await axios.post('http://localhost:8080/addJob', job)
        await axios.post('http://localhost:8080/addSkill', skill)
        await axios.post('http://localhost:8080/addJobSkill', jobSKill)
    }

    // console.log(jobs)
    // console.log(jobSkills)

    return (
        <div className='job-container'>
            {
                jobSkills.map((j) => {
                    return (
                        <div className="job-wrapper" key={j.jobId.id}>
                            <div className='job-left'>
                                <h1 className="skill-level">{j.skillLevel}</h1>
                            </div>
                            <div className="job-right">
                                <h2 className="job-name">{j.jobId.jobName}</h2>
                                <h4 className="company-name">Công ty {j.jobId.company.compName}</h4>
                                <p className="jd">{j.jobId.jobDesc}</p>
                            </div>
                        </div>
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
                            <label className='form-job-label'>JD: </label>
                            <textarea className='form-job-input' name='jobDesc' rows='4' onChange={handleInput}></textarea>
                        </div>
                        <h2 className='add-job-title'>Kĩ năng</h2>
                        <div className='input-wrapper'>
                            <label className='form-job-label'>Tên kĩ năng</label>
                            <input className='form-job-input' type='text' name='skillName' onChange={handleInput} /><br />
                            <label className='form-job-label'>Loại kỹ năng</label>
                            <select className='form-job-input' name='skillType' onChange={handleInput}>
                                <option value={0}>UNSPECIFIC</option>
                                <option value={1}>TECHNICAL_SKILL</option>
                                <option value={2}>SOFT_SKILL</option>
                            </select>
                        </div>
                        <div className='input-wrapper'>
                            <label className='form-job-label' style={{width: '11%'}}>Mô tả kĩ năng</label>
                            <textarea className='form-job-input' name='skillDesc' rows='4' onChange={handleInput}></textarea><br />
                            <label className='form-job-label' style={{width: '10%'}}>Mô tả thêm về công việc</label>
                            <textarea className='form-job-input' name='moreInfo' rows={4} onChange={handleInput}></textarea>
                        </div>
                        <div className='input-wrapper'>
                            <label>Cấp bậc kĩ năng</label>
                            <select className='form-job-input' name='skillLevel' onChange={handleInput}>
                                <option value={1}>BEGINER</option>
                                <option value={2}>IMTERMEDIATE</option>
                                <option value={3}>ADVANCED</option>
                                <option value={4}>PROFESSIONAL</option>
                                <option value={5}>MASTER</option>
                            </select>
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