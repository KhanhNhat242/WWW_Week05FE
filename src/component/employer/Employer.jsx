import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Employer.scss'
import axios from 'axios'

function Employer() {
    const navigate = useNavigate()

    const [company, setCompany] = useState({ 
        compName: '',
        email: '',
        phone: '',
        webUrl: '',
        about: '',
    })

    const [address, setAddress] = useState({
        country: '',
        city: '',
        street: '',
        number: '',
        zipCode: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target

        setCompany({...company, [name]: value})
        setAddress({...address, [name]: value})
        // console.log(address)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8080/addAddress', address)
        await axios.post('http://localhost:8080/addCompany', company)
        // console.log(company)
        // console.log(address)
        navigate('/company')
    }

    return ( 
        <div className='employer-container'>
            <div className="employer-wrapper">
                <form className="employer-form">
                    <h3 className='infor-title'>Thông tin công ty</h3>
                    <label className="employer-label">Tên công ty:</label>
                    <input className="employer-input" type="text" name='compName' value={company.compName} onChange={handleInput} />
                    <label className="employer-label">Email:</label>
                    <input className="employer-input" type="email" name='email' value={company.email} onChange={handleInput} /> <br />
                    <label className="employer-label">Số điện thoại:</label>
                    <input  className="employer-input"type="text" name='phone' value={company.phone} onChange={handleInput} />
                    <label className="employer-label">Trang web:</label>
                    <input className="employer-input" type="text" name='webUrl' value={company.webUrl} onChange={handleInput} /> <br />
                    <div className='description'>
                        <label className="employer-label">Mô tả:</label>
                        <textarea type="text" name='about' rows='7' cols='60' value={company.about} onChange={handleInput} /> <br />
                    </div>
                    <hr color='orange' />
                    <h3 className='address-title'>Địa chỉ</h3>
                    <label className='employer-label'>Quốc gia:</label>
                    <input className='employer-input' type='text' name='country' value={address.country} onChange={handleInput} />   
                    <label className='employer-label'>Thành phố:</label>
                    <input className='employer-input' type='text' name='city' value={address.city} onChange={handleInput} /> <br />
                    <label className='employer-label'>Tên đường:</label>
                    <input className='employer-input' type='text' name='street' value={address.street} onChange={handleInput} />   
                    <label className='employer-label'>Số nhà:</label>
                    <input className='employer-input' type='text' name='number' value={address.number} onChange={handleInput} /> <br />
                    <label className='employer-label'>Zip code: </label>
                    <input className='employer-input' type='text' name='zipCode' value={address.zipCode} onChange={handleInput} />    
                    <hr color='orange' />
                    <div className='employer-btn-wrapper'>
                        <button className='employer-btn' type='submit' onClick={(e) =>  handleSubmit(e)}>Submit</button>
                        <button className='employer-btn' type='reset'>Clear</button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Employer;