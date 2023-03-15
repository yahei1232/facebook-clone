import React from 'react'
import './Posts.css'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';
function Posts() {

    return (
        <div className='Posts'>
            < div className="post" >
                <div className="img-name-more">
                    <div className="img-name">
                        <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width={"40px"} />
                        <div className="name-time">
                            <h3>yahya</h3>
                            <h5>5h</h5>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>

                <p className='title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos animi soluta odit? Fugit eveniet sint ut porro voluptate facere eius mollitia exercitationem suscipit adipisci. Iusto corporis perferendis totam quasi natus.</p>

                < img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" />

                <div className="numof-like-comment-share">
                    <h5>12</h5>
                    <div className="numof-comment-share">
                        <h5>20k comment</h5>
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
            </div>
        </div >
    )
}

export default Posts
