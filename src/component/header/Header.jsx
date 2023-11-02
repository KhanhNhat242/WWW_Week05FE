import { Link } from 'react-router-dom'
import './Header.scss'
// import { useEffect, useState } from 'react'

function Header({ isLogIn, handleSignOut }) {
    // const [compName, setCompName] = useState('')

    // var c = document.cookie.slice(9)
    // console.log(document.cookie.slice(9))
    // console.log(compName)

    // useEffect(() => {
    //     var c = document.cookie.slice(9)
    //     setCompName(c)
    // }, [c])

    const deleteCookie = () => {
        // console.log(compName)
        // setCompName('')
        handleSignOut()
        document.cookie = 'compName = ; expires=Thu, 18 Dec 2018 12:00:00 UTC; path=/;'
    }

    return ( 
        <div className="header-wrapper">
            <div className='nav-left'>
                <h3 className='nav-item'>
                    <Link to='/' className='nav-link'>TRANG CHỦ</Link>
                </h3>
                <h3 className='nav-item'>
                    <Link to='/job' className='nav-link'>Việc làm</Link>
                </h3>
                <h3 className='nav-item'>
                    <Link to='/company' className='nav-link'>Công ty</Link>
                </h3>
            </div>
            <div className='nav-right'>
                <button className='btn-nav-right'>
                    <Link to='/employer'>Nhà tuyển dụng</Link>
                </button>
                <button className={'btn-nav-right ' + `${isLogIn !== false ? 'comp-name' : ''}`}>
                    <Link to='/log-in'>{isLogIn !== false ? document.cookie.slice(9) : 'Đăng nhập'}</Link>
                </button>
                <div className='sign-out-wrapper' onClick={() => deleteCookie()}>
                    <p className='sign-out-txt'>Đăng xuất</p>
                </div>
            </div>
        </div>
     );
}

export default Header;