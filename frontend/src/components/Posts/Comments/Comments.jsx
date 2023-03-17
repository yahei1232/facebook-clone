import React, { useState } from 'react'
import './Comments.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Comments({ commentId, postId, fetchPost }) {

    const [comment, setComment] = useState("")

    const tok = useSelector(state => state?.user?.currentUser?.token)

    let handleComment = async () => {

        try {
            await axios.post(`/comment/${postId}`, {
                comment,
            }, {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            })
            fetchPost()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='Comments'>
            <div className="comment">
                <div className="img-input">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='34px' />
                    <input type="text" placeholder='write a comment...' onChange={e => setComment(e.target.value)} />
                    <button onClick={() => handleComment(commentId)}>Comment</button>
                </div>
                {commentId && commentId?.map((result, key) => {
                    return (
                        <div key={key}>
                            <div className="name-desc-img">
                                <img src={result?.userId?.photo} alt="" width='34px' />
                                <div className="name-desc">
                                    <h5 className="name">{result?.userId?.name}</h5>
                                    <h5 className="desc">{result?.comment}</h5>
                                </div>
                                <MoreHorizIcon />
                            </div>
                            <div className="like-replay-time-num">
                                <button className='Like'>Like</button>
                                <button className='replay'>replay</button>
                                <button className='time'>1D</button>
                                <h5 className='num'>12</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Comments