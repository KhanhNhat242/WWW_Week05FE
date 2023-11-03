import { useState } from 'react';
import './Candidate.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Candidate() {
    const navigate = useNavigate()

    const [candidate, setCandidate] = useState({
        fullName: '',
        dob: '',
        phone: '',
        email: '',
    })
    const [address, setAddress] = useState({
        country: 0,
        city: '',
        street: '',
        number: '',
        zipCode: '',
    })

    const handleInput = (e) => {
        const {name, value} = e.target

        setCandidate({...candidate, [name]: value})
        setAddress({...address, [name]: value})
    }

    const handleSubmit =  async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:8080/addAddresss', address)
        await axios.post('http://localhost:8080/addCandidate', candidate)

        navigate('/')
    }

    return ( 
        <div className='candidate-wrapper'>
            <form className='candidate-form'>
                <h2 className='candidate-info-txt'>Thông tin ứng viên</h2>
                <label className='candidate-label'>Tên</label>
                <input className='candidate-input' name='fullName' type='text' onChange={handleInput} />
                <label className='candidate-label' style={{marginLeft: 119}}>Ngày sinh</label>
                <input className='candidate-input' name='dob' type='date' onChange={handleInput} /> <br />
                <label className='candidate-label'>Số điện thoại</label>
                <input className='candidate-input' name='phone' type='text' onChange={handleInput} />
                <label className='candidate-label' style={{marginLeft: 55}}>Email:</label>
                <input className='candidate-input' name='email' type='text' onChange={handleInput} /> <br />
                <hr color='orange' />
                <h3 className='candidate-info-txt'>Địa chỉ</h3>
                <label className='candidate-label'>Quốc gia:</label>
                <input className='candidate-input' type='text' name='country' onChange={handleInput} />   
                <label className='candidate-label' style={{marginLeft: 80}}>Thành phố:</label>
                <input className='candidate-input' type='text' name='city' onChange={handleInput} /> <br />
                <label className='candidate-label'>Tên đường:</label>
                <input className='candidate-input' type='text' name='street' onChange={handleInput} />   
                <label className='candidate-label' style={{marginLeft: 70}}>Số nhà:</label>
                <input className='candidate-input' type='text' name='number' onChange={handleInput} /> <br />
                <label className='candidate-label'>Zip code: </label>
                <input className='candidate-input' type='text' name='zipCode' onChange={handleInput} />    
                <hr color='orange' />
                <div className='candidate-btn-wrapper'>
                    <button className='candidate-btn' onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </form>
        </div>
     );
}

export default Candidate;