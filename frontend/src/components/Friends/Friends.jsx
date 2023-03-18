import React, { useEffect, useState } from 'react'
import './Friends.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HouseIcon from '@mui/icons-material/House';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from 'axios';

import { Link, useLocation } from "react-router-dom";
import { updateFriends } from '../../redux/userSlice';
import FriendPost from './FriendPost/FriendPost';

function Friends() {
    const location = useLocation();
    const dataX = location.state?.data;
    const dispatch = useDispatch();

    const tok = useSelector(state => state.user.currentUser.token)
    var { userId } = jwt_decode(tok);

    const [user, serUser] = useState({});
    const [friendData, serFriendData] = useState({});

    const addFriend = async () => {
        try {
            await axios.put(`/user/addFriend/${dataX._id}`,
                { userId },
                {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
            fetchFriend()
            fetchUser()
        } catch (error) {
            console.log(error);
        }
    }

    const removeFriend = async () => {
        try {
            await axios.put(`/user/removeFriend/${dataX._id}`,
                { userId },
                {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
            fetchFriend()
        } catch (error) {
            console.log(error);
        }
    }

    const acceptFriend = async () => {
        try {
            const res = await axios.put(`/user/acceptFriend/${dataX._id}`,
                { userId },
                {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
            dispatch(updateFriends(res?.data))
            fetchFriend()
        } catch (error) {
            console.log(error);
        }
    }

    const cansleFriend = async () => {
        try {
            await axios.put(`/user/cansleFriend/${dataX._id}`,
                { userId },
                {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
            fetchFriend()
        } catch (error) {
            console.log(error);
        }
    }

    const followFriend = async () => {
        try {
            await axios.put(`/user/addFollowers/${dataX._id}`,
                { userId },
                {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
            fetchFriend()
        } catch (error) {
            console.log(error);
        }
    }

    const unfollowFriend = async () => {
        try {
            await axios.put(`/user/removeFollowers/${dataX._id}`,
                { userId },
                {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
            fetchFriend()
        } catch (error) {
            console.log(error);
        }
    }

    const fetchFriend = async () => {
        const res = await axios.get(`/user/getUser/${dataX._id}`)
        serFriendData(res?.data);
    }

    useEffect(() => {
        fetchFriend()
    }, [])

    const fetchUser = async () => {
        const res = await axios.get(`/user/getUser/${userId}`)
        serUser(res?.data);
    }

    useEffect(() => {
        fetchUser()
    }, [])

    let idsOfFriends = [];

    for (let i = 0; i < friendData?.friends?.length; i++) {
        const element = friendData?.friends[i];
        idsOfFriends.push(element._id);
    }

    return (
        <div className='Friends'>
            <div className="background">
                <div className="img-photo-name-edit-name">
                    <div className="img-photo-edit">
                        <img className='cover-photo' src='{asd}' alt="asd" width="1000px" />
                        <div className="name-edit-Friends">
                            <h1 className='name'>{friendData?.name}</h1>
                            <div className="add-message">



                                {friendData?.panding?.includes(userId) && user?.watingaccept?.includes(friendData?._id) && !idsOfFriends?.includes(userId) ? (
                                    <button className='message' onClick={() => removeFriend()}>Cansle</button>
                                ) : friendData?.watingaccept?.includes(userId) && user?.panding?.includes(friendData?._id) && !idsOfFriends?.includes(userId) ? (
                                    <button className='message' onClick={() => acceptFriend()}>Accept Friend</button>
                                ) : !friendData?.panding?.includes(userId) && !user?.watingaccept?.includes(friendData?._id) && idsOfFriends?.includes(userId) ? (
                                    <button className='message' onClick={() => cansleFriend()}>Cansle Friend</button>
                                ) : (
                                    <button className='add' onClick={() => addFriend()}>Add Friend</button>
                                )}

                                {friendData?.followers?.includes(userId) && userId ? (
                                    <button className='message' onClick={() => unfollowFriend()}>Unfollow</button>
                                ) : (
                                    <button className='message' onClick={() => followFriend()}>Follow</button>
                                )}
                                <button className='message'>Message</button>
                            </div>
                        </div>
                        <img className='person-photo' src={friendData?.photo} alt="asd" width='150px' height="150px" />
                    </div>


                    <hr />

                    <div className="post-about-friend-photo-video-more">
                        <div className="post-about-friend-photo-video">
                            <button className="post">Post</button>
                            <button className="about">about</button>
                            <button className="friend">friend</button>
                            <button className="video">video</button>
                        </div>
                        <MoreHorizIcon className='more' />
                    </div>
                </div>
            </div>

            <div className="intro-feed-post">
                <div className="left-Friends">
                    <div className="intro-live-from-inrela-following">
                        <h2>Intro</h2>
                        <div className="live">
                            <HouseIcon />
                            {friendData?.city ? (<h3>{friendData?.city}</h3>) : (<h3>user didn't enter</h3>)}
                        </div>
                        <div className="from">
                            <LocationOnIcon />
                            {friendData?.city ? (<h3>{friendData?.city}</h3>) : (<h3>user didn't enter</h3>)}
                        </div>
                        <div className="inrela">
                            <FavoriteIcon />
                            <h3>In a relationship</h3>
                        </div>
                        <div className="following">
                            <RssFeedIcon />
                            <h3>Followed by {friendData && friendData?.followers?.length} people</h3>
                        </div>
                    </div>

                    <div className="photo-all-img">
                        <div className="photo-all">
                            <h4>Photo</h4>
                            <h4 className='see-all'>See All Photo</h4>
                        </div>

                        <div className="center-photo">
                            <div className="photo">
                                {friendData?.posts && friendData?.posts.map((resul, key) => (
                                    <div className="" key={key}>
                                        <img className='one' src={resul.photo} alt="" width="100px" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="text-img-friends">
                        <div className="text">
                            <div className="friend-num">
                                <h4>Friends</h4>
                                <h4>272 friends</h4>
                            </div>
                            <h4 className='see-all'>See All Photo</h4>
                        </div>

                        <div className="center-friends">
                            <div className="friends">

                                {friendData?.friends && friendData?.friends?.map((resul, key) => (
                                    <div className="friends-one" key={key}>
                                        <Link to="/friends" state={{ data: resul }} className="link">
                                            <img className='one' src={resul.photo} alt="" width="100px" height="100px" />
                                            <h5>{resul.name}</h5>
                                        </Link>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                </div>

                <div className="right-Friends">
                    <FriendPost post={friendData?.posts} fetchPost={fetchFriend} />
                </div>
            </div>

        </div >
    )
}

export default Friends