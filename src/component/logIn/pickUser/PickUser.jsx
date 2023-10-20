import './PickUser.scss'

function PickUser() {
    return ( 
        <div className='pick-user-wrapper'>
            <a className='user' href="/log-in/candidate">
                <button>Ứng viên</button>
            </a>
            <a className='user' href="/log-in/employer">
                <button>Nhà tuyển dụng</button>
            </a>
        </div>
     );
}

export default PickUser;