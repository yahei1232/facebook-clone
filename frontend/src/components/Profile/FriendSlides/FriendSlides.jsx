import React, { useState, useEffect, useRef } from 'react'
import './FriendSlides.css'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function FriendSlides() {
    const [width, setWidth] = useState(0)
    const carlos = useRef();
    useEffect(() => {
        setWidth(carlos.current.scrollWidth - carlos.current.offsetWidth)
    }, [])

    const [suggrest, setSuggrest] = useState([])
    const tok = useSelector(state => state?.user?.currentUser?.token)

    const fetchSugrest = async () => {
        const res = await axios.get("/user/getSuggrest",
            {
                headers: {
                    Authorization: `Bearer ${tok}`,
                }
            })
        setSuggrest(res?.data);
    }
    useEffect(() => {
        fetchSugrest()
    }, [])

    return (
        <div className='FriendSlides'>
            <motion.div ref={carlos} className="carousel">
                <motion.div
                    className="inner-carousel"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {suggrest && suggrest?.map((suggrest1, key) => {
                        return (
                            <motion.div className="item" key={key}>
                                <Link to="/friends" state={{ data: suggrest1 }} className="link">
                                    <img src={suggrest1?.photo} alt="" height="150px" width="150px" />
                                </Link>
                                <h4 className="h3">{suggrest1?.name}</h4>
                                <div className="add-remove">
                                    <button className='add'>Add</button>
                                    <button>X</button>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div >
    )
}

export default FriendSlides