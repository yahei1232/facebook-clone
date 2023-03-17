import { Modal, useMantineTheme } from "@mantine/core";
import './FeedModle.css'
import axios from 'axios';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FlagIcon from '@mui/icons-material/Flag';
import { useState } from "react";
import { useSelector } from "react-redux";

function PostProfileModle({ modalOpened, setModalOpened, fetchUser }) {

    const tok = useSelector(state => state.user.currentUser.token)

    const theme = useMantineTheme();

    const [descriptn, setDescriptn] = useState("");
    const [uploadeImg, setUploadeImg] = useState(null);


    const handlepost = async (e) => {
        e.preventDefault()
            try {
                await axios.post("/post/createPosts", {
                    descriptn,
                }, {
                    headers: {
                        Authorization: `Bearer ${tok}`,
                    },
                })
                setModalOpened(false)
                fetchUser()
            } catch (error) {
                console.log(error);
            }
    }


    return (
        <Modal
            overlaycolor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayopacity={0.55}
            overlayblur={3}
            size="55%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <div className="FeedModle">
                <h3 className="title">Create post</h3>

                <hr />

                <div className="img-name">
                    <img src='https://3.bp.blogspot.com/-p4B9iu_UAy8/U27vcaLiAMI/AAAAAAAALk4/Hze2XmyXH8g/s1600/249306-ster298qx_super.jpg' alt="" className="img" width="30px" height="30px" />
                    <h3 className="name">Yahya</h3>
                </div>

                <textarea className="descriptn" name="" id="" cols="30" rows="10" placeholder={`What's in your mind, Yahya`} onChange={(e) => setDescriptn(e.target.value)}></textarea>

                <div className="text-photo-emoje-flat-more">

                    <h4 className="text">Add To Your Post</h4>

                    <div className="photo-emoje-flat-more">
                        <div className="photo">
                            <input type="file" name='profileImg' id="photo" onChange={(e) => setUploadeImg(e.target.files[0])} />
                            <label htmlFor="photo"><AddPhotoAlternateIcon /></label>
                        </div>
                        <AddReactionIcon className="emoje" />
                        <FlagIcon className="flat" />
                        <MoreHorizIcon className="more" />
                    </div>
                </div>

                <button className="PostButton" onClick={handlepost}>Post</button>
            </div>
        </Modal>
    );
}

export default PostProfileModle;