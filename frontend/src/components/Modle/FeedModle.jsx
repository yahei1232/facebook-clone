import { Modal, useMantineTheme } from "@mantine/core";
import './FeedModle.css'

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FlagIcon from '@mui/icons-material/Flag';

function FeedModle({ modalOpened, setModalOpened }) {

    const theme = useMantineTheme();

    const handlepost = async (e) => {
        e.preventDefault()
        setModalOpened(false)
    }
    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <div className="FeedModle">
                <h3 className="title">Create post</h3>

                <hr />

                <div className="img-name">
                    <img src='{asd}' alt="" className="img" width="30px" height="30px" />
                    <h3 className="name">Yahya</h3>
                </div>

                <textarea className="descriptn" name="" id="" cols="30" rows="10" placeholder={`What's in your mind, Yahya`} ></textarea>

                <div className="text-photo-emoje-flat-more">

                    <h4 className="text">Add To Your Post</h4>

                    <div className="photo-emoje-flat-more">
                        <div className="photo">
                            <input type="file" name='profileImg' id="photo" />
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

export default FeedModle;