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

    console.log(post);
    console.log(tok);

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
        // console.log(res);
    }
    useEffect(() => {
        fetchPost()
    }, [])

    // console.log(post?.posts);
    // console.log(post?.friends);


    return (
        <div className='Home'>
            <div className="all-section">
                <LeftSide />
                <div className="feed-post">
                    <Feed />
                    <Posts />
                </div>
                <RightSide />
            </div>
        </div>
    )
}

export default Home