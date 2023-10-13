import './Job.scss'

function Job({ jobs }) {


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
                                    <h2 className="job-name">{j.jobName}</h2>
                                    <h4 className="company-name">{j.company.compName}</h4>
                                    <p className="job-address">{j.company.address.city}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            {/* <div className='job-container'>
                <div className="job-wrapper">
                    <div className='job-left'>
                        <h1 className="skill-level">ADVANCE</h1>
                    </div>
                    <div className="job-right">
                        <h2 className="job-name">Front-end Web Developer</h2>
                        <h4 className="company-name">Company Name</h4>
                        <p className="job-address">12 Nguyen Van Bao</p>
                    </div>
                </div>
            </div> */}
        </div>
     );
}

export default Job;