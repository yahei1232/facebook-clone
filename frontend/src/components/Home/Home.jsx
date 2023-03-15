import React from 'react'
import Feed from '../Feed/Feed'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'

const Home = () => {

    return (
        <div className='Home'>
            <div className="all-section">
                <LeftSide />
                <Feed />
                <RightSide />
            </div>
        </div>
    )
}

export default Home