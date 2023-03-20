import './chatOnline.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("/users/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    return (
        <div className="chatOnline">
            {onlineFriends.map((o) => (
                <div className="chatOnlineFriend" >
                    <div className="chatOnlineImgContainer">
                        <img
                            className="chatOnlineImg"
                            src=''
                            alt=""
                        />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{o?.username}</span>
                </div>
            ))}
        </div>
    );
}

export default ChatOnline