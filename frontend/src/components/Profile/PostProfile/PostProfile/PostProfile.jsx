import React from 'react'
import './PostProfile.css'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
import { format } from 'timeago.js';

function PostProfile({ posts, fetchUser }) {
    return (
        <div className='PostProfile'>
            {posts && posts?.map((resul, key) => (
                < div className="post" key={key}>
                    <div className="img-name-more">
                        <div className="img-name">
                            <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width={"40px"} />
                            <div className="name-time">
                                <h3>{resul.userId.name}</h3>
                                <h5>{format(resul.createdAt)}</h5>
                            </div>
                        </div>
                        <MoreHorizIcon />
                    </div>
                    <p className='title'>{resul.descriptn}</p>
                    < img src={resul.photo} alt="" />
                    <div className="numof-like-comment-share">
                        <h5>{resul.likes.length}</h5>
                        <div className="numof-comment-share">
                            <h5>{resul.commentId.length} comment</h5>
                            <h5>2k share</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="like-comment-share">
                        <div className="like-comment-share-edit">
                            <ThumbUpIcon />
                            <button className='like'>Like</button>
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
                </div>
            ))}
        </div >
    )
}

export default PostProfile