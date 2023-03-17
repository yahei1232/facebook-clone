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
    const [friendsPost, setFriendsPost] = useState([]);
    const tok = useSelector(state => state?.user?.currentUser?.token)

    const fetchPost = async () => {
        try {
            const res = await axios.get(`/user/getMyAndFriendPosts`, {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            });
            console.log(res?.data);
            setPost(res?.data?.user?.posts);
            setFriendsPost(res?.data?.followers?.map(follower => follower.posts).flat());
        } catch (err) {
            console.log(err);
        }
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
                    <Posts userPosts={post} friendsPosts={friendsPost} fetchPost={fetchPost} />
                </div>
                <RightSide />
            </div>
        </div>
    )
}

export default Home