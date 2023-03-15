import React from 'react'
import Feed from '../Feed/Feed'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import './Home.css'

const Home = () => {

    return (
        <div className='Home'>
            <div className="all-section">
                <LeftSide />
                <div className="feed-post">
                    <Feed />
                </div>
                <RightSide />
            </div>
        </div>
    )
}

export default Home