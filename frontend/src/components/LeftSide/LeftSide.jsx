import React from 'react'
import './LeftSide.css'
import GroupIcon from '@mui/icons-material/Group';
import TvIcon from '@mui/icons-material/Tv';
import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

function LeftSide() {
    return (
        <div className='LeftSide'>
            <div className="prof-photo">
                <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                <h2>yahya</h2>
            </div>
            <div className="prof-photo">
                <GroupIcon className='icons' />
                <h2>Find friend</h2>
            </div>
            <div className="prof-photo">
                <TvIcon className='icons' />
                <h2>Watch</h2>
            </div>
            <div className="prof-photo">
                <EmailIcon className='icons' />
                <h2>Message</h2>
            </div>
            <div className="prof-photo">
                <GroupsIcon className='icons' />
                <h2>Group</h2>
            </div>
            <div className="prof-photo">
                <FlagCircleIcon className='icons' />
                <h2>Group</h2>
            </div>
        </div>
    )
}

export default LeftSide