import React from 'react'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'

const Home = () => {

    return (
        <div className='Home'>
            <div className="all-section">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

export default Home