import React, { useEffect, useState } from 'react'
import Feed from '../Feed/Feed'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import Posts from '../Posts/Posts'
import './Home.css'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Home = () => {

    const [post, setPost] = useState([]);
    const tok = useSelector(state => state?.user?.currentUser?.token)

    const fetchPost = async () => {
        return await axios.get(`/user/getMyAndFriendPosts`,
            {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            })
            .then((res) => {
                console.log(res?.data);
                setPost(res?.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div className='Home'>
            <div className="all-section">
                <LeftSide />
                <div className="feed-post">
                    <Feed fetchPost={fetchPost} />
                    <Posts userPosts={post?.posts} friendsPosts={post?.friends} fetchPost={fetchPost} />
                </div>
                <RightSide />
            </div>
        </div>
    )
}

export default Home