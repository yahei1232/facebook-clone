import { Modal, useMantineTheme } from "@mantine/core";
import './ProfileModle.css'
import axios from 'axios';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import { useSelector } from "react-redux";

function ProfileModle({ modalOpened, setModalOpened, fetchUser }) {

    const tok = useSelector(state => state.user.currentUser.token)

    const theme = useMantineTheme();

    const [name, setUsername] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setGmail] = useState("");
    const [gander, setGender] = useState("");
    const [city, setCity] = useState("");
    const [uploadeImg, setUploadeImg] = useState(null);

    const handleUpdateUser = async (e) => {
        try {
            await axios.put("/user/updateUser", {
                name,
                surname,
                password,
                email,
                gander,
                city,
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
            <div className="ProfileModle">
                <h3 className="title">Edit Profile</h3>

                <hr />

                <div className="img-name">
                    <img src='{asd}' alt="" className="img" width="30px" height="30px" />
                    <h3 className="name">Yahya</h3>
                </div>

                <div className="handle-inputs">
                    <div className="name-sur">
                        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                        <input type="text" placeholder="sur-name" onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <input type="text" placeholder="gmail" onChange={(e) => setGmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="gender-city">
                        <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)} />
                        <input type="text" placeholder="gender" onChange={(e) => setGender(e.target.value)} />
                    </div>

                    <div className="addphoto">
                        <div className="photo">
                            <input type="file" name='profileImg' id="photo" onChange={(e) => setUploadeImg(e.target.files[0])} />
                            <label htmlFor="photo"><AddPhotoAlternateIcon /></label>
                        </div>
                    </div>
                </div>

                <button className="PostButton" onClick={handleUpdateUser}>Edit</button>
            </div>
        </Modal>
    );
}

export default ProfileModle;