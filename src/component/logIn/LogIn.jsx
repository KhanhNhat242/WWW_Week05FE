import { createContext, useState } from 'react';
import './LogIn.scss'
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';

export const CompNameContext = createContext()

function LogIn({ onLogIn }) {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault()
        const data  = await axios.post('http://localhost:8080/checkLogin', email, {headers: {'Content-Type': 'application/json; charset=UTF-8'}})
        const res = await data.data
        // console.log(email)
        console.log(res)
        if(res !== 'fail'){
            onLogIn()
            setEmail('')
            alert('Log in sucessful')  
            document.cookie = 'compName = ' + res + '; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;'
            navigate('/job')
        }
        else alert('Log in fail')
    }

    return ( 
        <div className='log-in-wrapper'>
            <form className='log-in-form'>
                <div className='input-wrapper'>
                    <label className='email-label'>Email:</label>
                    <input className='email-input' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                </div>
                <button className='log-in-btn' type='submit' onClick={(e) => handleLogIn(e)}>Đăng nhập</button>
            </form>
        </div>
     );
}

export default LogIn;