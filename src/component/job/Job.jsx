import './Job.scss'

function Job() {
    return ( 
        <div className='job-container'>
            <div className="job-wrapper">
                <div className='job-left'>
                    <h1 className="skill-level">ADVANCE</h1>
                </div>
                <div className="job-right">
                    <h2 className="job-name">Front-end Web Developer</h2>
                    <h4 className="company-name">Company Name</h4>
                    <p className="address">12 Nguyen Van Bao</p>
                </div>
            </div>
        </div>
     );
}

export default Job;