import React, { useEffect, useState } from 'react'
import axios from "axios";
import './conversations.css'
function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await axios("/user/getUser/" + friendId);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);
    // console.log(user);

    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src={user?.photo}
                alt=""
            />
            <span className="conversationName">{user?.name}</span>
        </div>
    );
}

export default Conversation