import React, { useState } from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import PostProfileModle from '../../../Modle/PostProfileModle';


function FeedProfile({ fetchUser }) {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className='Feed'>
            <div className="photo-share">
                <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='40px' />
                <input type="text" placeholder='write what you are thinking here' onClick={() => setModalOpened(true)} />
            </div>
            <hr />
            <div className="live-photo-feel">
                <div className="live-text">
                    <LiveTvIcon />
                    <h4>Live/video</h4>
                </div>
                <div className="live-text" >
                    <AddPhotoAlternateIcon />
                    <h4>Photo/video</h4>
                </div>
                <div className="live-text">
                    <AddReactionIcon />
                    <h4>Life/event</h4>
                </div>
            </div>
            <PostProfileModle
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                fetchUser={fetchUser}
            />
        </div>
    )
}

export default FeedProfile