import React from 'react'
import './FeedBody.css'
//import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";



//import { useNavigate } from 'react-router-dom';
function FeedBody() {



    {/* useEffect(() => {
        APIKit.get("/search").then(function (response) {
            setFeedPlay(response.data.items);
            console.log(response.data.items);
        });
    }, [])*/}




    return (


        <div className="body__songs">
            <div className="body__icons">
                
                <MdOutlineFavorite fontSize="large" />
                <MdMoreHoriz />
            </div>
        </div>

    )
}

export default FeedBody