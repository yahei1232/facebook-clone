import React, { useState } from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function FeedProfile({ fetchUser }) {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className='Feed'>
            <div className="photo-share">
                <img src='{asd}' alt="" width='40px' />
                <input type="text" placeholder='write what you are thinking here' />
            </div>
            <hr />
            <div className="live-photo-feel">
                <div className="live-text">
                    <LiveTvIcon />
                    <h4>Live/video</h4>
                </div>
                <div className="live-text" onClick={() => setModalOpened(true)} >
                    <AddPhotoAlternateIcon />
                    <h4>Photo/video</h4>
                </div>
                <div className="live-text">
                    <AddReactionIcon />
                    <h4>Life/event</h4>
                </div>
            </div>
        </div>
    )
}

export default FeedProfile