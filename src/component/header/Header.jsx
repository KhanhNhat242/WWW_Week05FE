import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {

    var compName = document.cookie.slice(9)
    // console.log(document.cookie.slice(9))
    console.log(compName)

    const deleteCookie = () => {
        console.log(compName)
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
                <button className={'btn-nav-right ' + `${compName !== '' ? 'comp-name' : ''}`}>
                    <Link to='/log-in'>{compName !== '' ? compName : 'Đăng nhập'}</Link>
                </button>
                <div className='sign-out-wrapper' onClick={() => deleteCookie()}>
                    <p className='sign-out-txt'>Đăng xuất</p>
                </div>
            </div>
        </div>
     );
}

export default Header;