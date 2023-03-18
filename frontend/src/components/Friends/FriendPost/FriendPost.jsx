import React from 'react'
import './FriendPost.css'
import axios from 'axios'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';

import { useSelector } from "react-redux";

import { format } from 'timeago.js';
import jwt_decode from "jwt-decode";
import FriendComment from '../FriendComment/FriendComment';

function FriendPost({ post, fetchPost }) {
    const tok = useSelector(state => state.user.currentUser.token)
    var decoded = jwt_decode(tok);

    const handleLike = async (id) => {
        await axios.put(`/post/likePost/${id}`,
            { userId: decoded.userId },
            {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            })
            .then((res) => {
                fetchPost()
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='FriendPost'>
            {post && post?.map((result1, key) => (
                < div className="post" key={key} >
                    <div className="img-name-more">
                        <div className="img-name">
                            <img src={result1.userId.photo} alt="" width={"40px"} />
                            <div className="name-time">
                                <h3>yahya</h3>
                                <h5>{format(result1.createdAt)}</h5>
                            </div>
                        </div>
                        <MoreHorizIcon />
                    </div>
                    <p className='title'>{result1.descriptn}</p>
                    < img src={result1.photo} alt="" />
                    <div className="numof-like-comment-share">
                        <h5>{result1.likes.length}</h5>
                        <div className="numof-comment-share">
                            <h5>20k comment</h5>
                            <h5>2k share</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="like-comment-share">
                        <div className="like-comment-share-edit">
                            <ThumbUpIcon />
                            <button className='like' onClick={() => handleLike(result1._id)}>Like</button>
                        </div>
                        <div className="like-comment-share-edit">
                            <ChatBubbleIcon />
                            <button className='comment'>comment</button>
                        </div>
                        <div className="like-comment-share-edit">
                            <ReplyIcon />
                            <button className='share'>share</button>
                        </div>
                    </div>
                    <hr />
                    <FriendComment commentId={result1.commentId} postId={result1._id} fetchPost={fetchPost} />
                </div>
            ))}
        </div >
    )
}

export default FriendPost