import './Header.scss'

function Header() {
    return ( 
        <div className="header-wrapper">
            <div className='nav-left'>
                <h3 className='nav-item'>
                    <a href='/' className='nav-link'>TRANG CHỦ</a>
                </h3>
                <h3 className='nav-item'>
                    <a href='/job' className='nav-link'>Việc làm</a>
                </h3>
                <h3 className='nav-item'>
                    <a href='/company' className='nav-link'>Công ty</a>
                </h3>
            </div>
            <div className='nav-right'>
                <button className='btn-nav-right'>
                    <a href='/employer'>Nhà tuyển dụng</a>
                </button>
                <button className='btn-nav-right'>
                    <a href='/log-in'>Đăng nhập</a>
                </button>
            </div>
        </div>
     );
}

export default Header;