import React, { useState } from 'react'
import './CommentsProfile.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";

function CommentsProfile({ comments, userrId, fetchUser }) {
    // console.log(userrId);

    const [comment, setComment] = useState("")

    const tok = useSelector(state => state.user.currentUser.token)
    var decoded = jwt_decode(tok);
    // console.log(tok);

    let handleComment = async (e) => {

        try {
            const res = await axios.post(`/comment/${userrId}`, {
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

    const handleLike = async (id) => {

        await axios.put(`/comment/likeComment/${id}`,
            { userId: decoded.userId },
            {
                headers: {
                    Authorization: `Bearer ${tok}`,
                },
            })
            .then((res) => {
                fetchUser()
            }).catch((err) => {
                console.log(err);
            })
    }

    // console.log(comments?.likes?.length);
    return (
        <div className='CommentsProfile'>

            <div className="comment">
                <div className="img-input">
                    <img src='{asd}' alt="" width='34px' />
                    <input type="text" placeholder='write a comment...' value={comment} onChange={e => setComment(e.target.value)} />
                    {/* <button onClick={() => handleComment(commentId)}>Comment</button> */}
                    <button onClick={() => handleComment()}>Comment</button>
                </div>
                {comments && comments?.map((result3, key) => (

                    <div key={key}>
                        <div className="name-desc-img">
                            <img src='{asd}' alt="" width='34px' />
                            <div className="name-desc">
                                <h5 className="name">yahya</h5>
                                <h5 className="desc">{result3.comment}</h5>
                            </div>
                            <MoreHorizIcon />

                        </div>

                        <div className="like-replay-time-num">
                            <button className='Like' onClick={() => handleLike(result3._id)}>Like</button>
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