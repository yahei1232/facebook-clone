import React from 'react'
import './RightSide.css'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function RightSide() {
    return (
        <div className='RightSide'>
            <div className="concat">
                <div className="head">
                    <h2 className='concat'>Concats</h2>
                    <MoreVertIcon />
                </div>

                <div className="prof-photo">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                    <h2>jasm</h2>
                </div>
                <div className="prof-photo">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                    <h2>jasm</h2>
                </div>
                <div className="prof-photo">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                    <h2>jasm</h2>
                </div>
                <div className="prof-photo">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                    <h2>jasm</h2>
                </div>
            </div>

            <hr />

            <div className="group">
                <div className="prof-photo">
                    <AddIcon className='added' />
                    <h2>Create new group</h2>
                </div>
            </div>
        </div>
    )
}

export default RightSide