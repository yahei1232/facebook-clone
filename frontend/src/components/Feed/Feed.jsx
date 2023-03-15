import React from 'react'
import './Feed.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function Feed() {
    return (
        <div className='Feed'>
            <div className="photo-share">
                <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                <input type="text" placeholder='write what you are thinking here' />
            </div>
            <hr />
            <div className="live-photo-feel">
                <div className="live-text">
                    <LiveTvIcon />
                    <h4>Live video</h4>
                </div>
                <div className="live-text">
                    <AddPhotoAlternateIcon />
                    <h4>Photo/video</h4>
                </div>
                <div className="live-text">
                    <AddReactionIcon />
                    <h4>Feeling/action</h4>
                </div>
            </div>
        </div>
    )
}

export default Feed