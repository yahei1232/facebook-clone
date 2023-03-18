import React, { useState } from 'react'
import './CommentsProfile.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";

function CommentsProfile({ comments, userrId, fetchUser }) {

    const [comment, setComment] = useState("")

    const tok = useSelector(state => state.user.currentUser.token)
    
    let handleComment = async (e) => {

        try {
            await axios.post(`/comment/${userrId}`, {
                comment,
            }, {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            })
            fetchUser()
        } catch (error) {
            console.log(error);
        }
        setComment("")
    }

    return (
        <div className='CommentsProfile'>

            <div className="comment">
                <div className="img-input">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='34px' />
                    <input type="text" placeholder='write a comment...' value={comment} onChange={e => setComment(e.target.value)} />
                    <button onClick={() => handleComment()}>Comment</button>
                </div>
                {comments && comments?.map((result3, key) => (

                    <div key={key}>
                        <div className="name-desc-img">
                            <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" width='34px' />
                            <div className="name-desc">
                                <h5 className="name">yahya</h5>
                                <h5 className="desc">{result3?.comment}</h5>
                            </div>
                            <MoreHorizIcon />

                        </div>

                        <div className="like-replay-time-num">
                            <button className='Like'>Like</button>
                            <button className='replay'>replay</button>
                            <button className='time'>1D</button>
                            <h5 className='num'>{result3?.likes?.length}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default CommentsProfile