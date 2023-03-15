import React from 'react'
import './Comments.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Comments() {

    return (
        <div className='Comments'>
            <div className="comment">
                <div className="img-input">
                    <img src='{asd}' alt="" width='34px' />
                    <input type="text" placeholder='write a comment...' />
                    <button>Comment</button>
                </div>
                <div >
                    <div className="name-desc-img">
                        <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='34px' />
                        <div className="name-desc">
                            <h5 className="name">yahya</h5>
                            <h5 className="desc">nice photo</h5>
                        </div>
                        <MoreHorizIcon />
                    </div>
                    <div className="like-replay-time-num">
                        <button className='Like'>Like</button>
                        <button className='replay'>replay</button>
                        <button className='time'>1D</button>
                        <h5 className='num'>12</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Comments