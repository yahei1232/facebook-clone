import React from 'react'
import './Navbar.css'

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useDispatch } from "react-redux";
import { logout } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let loginout = () => {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div className='cont'>
            <div className="logo-search">
                <h1>F</h1>
                <input type="search" className="search" placeholder='search' />
            </div>

            <div className="nac-conp">
                <HomeIcon className='icon' style={{ color: "blue" }} />
                <PeopleIcon className='icon' style={{ color: "blue" }} />
                <LiveTvIcon className='icon' style={{ color: "blue" }} />
                <StorefrontIcon className='icon' style={{ color: "blue" }} />
                <VideogameAssetIcon className='icon' style={{ color: "blue" }} />
            </div>

            <div className="men-mess-not-profile">
                <MenuIcon className='show' style={{ color: "blue" }} />
                <EmailIcon className='show' style={{ color: "blue" }} />
                <NotificationsIcon className='show' style={{ color: "blue" }} />
                <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="asd" width='24px' onClick={loginout} />
            </div>
        </div>
    )
}

export default Navbar