import React, { useEffect, useState } from 'react'
import './Profile.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HouseIcon from '@mui/icons-material/House';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RssFeedIcon from '@mui/icons-material/RssFeed';

import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendSlides from './FriendSlides/FriendSlides';
import ProfileModle from '../Modle/ProfileModle';

function Profile() {

    const [modalOpened, setModalOpened] = useState(false);
    const [user, serUser] = useState({});

    const tok = useSelector(state => state?.user?.currentUser?.token)
    var { userId } = jwt_decode(tok);

    const fetchUser = async () => {
        await axios.get(`/user/getUser/${userId}`,
            { userId: userId },
            {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            }).then((res) => {
                // console.log(res);
                serUser(res?.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className='Profile'>
            <div className="background">
                <div className="img-photo-name-edit-name">
                    <div className="img-photo-edit">
                        <img className='cover-photo' src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="asd" width="1000px" />
                        <div className="name-edit-profile">
                            <h1 className='name'>{user?.name}</h1>
                            <button className='edit-profile' onClick={() => setModalOpened(true)}>Edit profile</button>
                            <ProfileModle
                                modalOpened={modalOpened}
                                setModalOpened={setModalOpened}
                                fetchUser={fetchUser}
                            />
                        </div>
                        <img className='person-photo' src={user?.photo} alt="asd" width='150px' />
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
            <FriendSlides />
            <div className="intro-feed-post">
                <div className="left-profile">
                    <div className="intro-live-from-inrela-following">
                        <h2>Intro</h2>
                        <div className="live">
                            <HouseIcon />
                            {user?.city ? (<h3>{user?.city}</h3>) : (<h3>user didn't enter</h3>)}
                        </div>
                        <div className="from">
                            <LocationOnIcon />
                            {user?.city ? (<h3>{user?.city}</h3>) : (<h3>user didn't enter</h3>)}
                        </div>
                        <div className="inrela">
                            <FavoriteIcon />
                            <h3>In a relationship</h3>
                        </div>
                        <div className="following">
                            <RssFeedIcon />
                            <h3>Followed by {user && user?.followers?.length} people</h3>
                        </div>
                    </div>
                    <div className="photo-all-img">
                        <div className="photo-all">
                            <h4>Photo</h4>
                            <h4 className='see-all'>See All Photo</h4>
                        </div>
                        <div className="center-photo">
                            <div className="photo">
                                {user?.posts && user?.posts?.map((resul, key) => (
                                    <div className="" key={key}>
                                        <img className='one' src={resul?.photo} alt="" width="100px" height="100px" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-img-friends">
                        <div className="text">
                            <div className="friend-num">
                                <h4>Friends</h4>
                                <h4>{user?.friends?.length}</h4>
                            </div>
                            <h4 className='see-all'>See All Photo</h4>
                        </div>

                        <div className="center-friends">
                            <div className="friends">

                                {user?.friends && user?.friends?.map((resul, key) => (
                                    <div className="friends-one" key={key}>
                                        <Link to="/friends" state={{ data: resul }} className="link">
                                            <img className='one' src={resul?.photo} alt="" width="100px" height="100px" />
                                            <h5>{resul?.name}</h5>
                                        </Link>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                </div>

                <div className="right-profile">
                    <h1>FEED</h1>
                    <h1>POST</h1>
                </div>
            </div>

        </div>
    )
}

export default Profile