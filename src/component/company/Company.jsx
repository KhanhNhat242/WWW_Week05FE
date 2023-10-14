import './Company.scss'

function Company({ companies }) {
    console.log(companies)

    return ( 
        <div className="company-container">
            {
                companies.map((c) => {
                    return (
                        <>
                            <div className="company-wrapper">
                                <h2 className="name">{c.compName}</h2>
                                <div className='email-phone-wrapper'>
                                    <p className="email">Email: {c.email}</p>
                                    <p className="phone">Phone: {c.phone}</p>
                                </div>
                                <p className="about">About: {c.about}</p>
                                <a className="link">{c.webUrl}</a>
                                <p className="address">Address: {`${c.address.number + ' ' + c.address.street + ' street, ' + c.address.city + ' city, ' + c.address.country}`}</p>
                            </div>
                        </>
                    )
                })
            }
            {/* <div className="company-wrapper">
                <h2 className="name">Company name</h2>
                <div className='email-phone-wrapper'>
                    <p className="email">Email: dlkfsdklggds</p>
                    <p className="phone">Phone: 0834495</p>
                </div>
                <p className="about">About: ksdfglksdg;k;</p>
                <a className="link">lksgdjklsdg</a>
                <p className="address">Address: kdsgjmlsdg</p>
            </div> */}
        </div>
     );
}

export default Company;