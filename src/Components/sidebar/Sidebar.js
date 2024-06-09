import React, { useEffect,useState } from 'react'
import "./Sidebar.css"
import SidebarButton from './SidebarButton'
import{MdFavorite} from "react-icons/md"
import{FaSignOutAlt} from "react-icons/fa"
import{FaGripfire,FaPlay} from "react-icons/fa"
import{IoLibrary} from "react-icons/io5"
import{MdSpaceDashboard} from "react-icons/md"
import apiClient from '../../Spotify/Spotify'
import Login from '../../Screens/auth/Login'

function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );

  useEffect(()=>{
    apiClient.get("me").then(response =>{
      setImage(response.data.images[0].url);
    })
  },[])


  return (
    <div className='sidebar-container'>
        <img
        src={image}
        className='profile-img'
        alt='profile'
        />
       
          <p className='web-name'>LYRICFY</p>
      
        <div>
            <SidebarButton title="Feed" to="/feed" icons={<MdSpaceDashboard/>}/>
            <SidebarButton title="Trending" to="/trending" icons={<FaGripfire/>}/>
            <SidebarButton title="Player" to="/player" icons={<FaPlay/>}/>
            <SidebarButton title="Favourites" to="/favourites" icons={<MdFavorite/>}/>
            <SidebarButton title="Library" to="/" icons={<IoLibrary/>}/>
        </div>
        <SidebarButton title="Sign Out" to='/login' icons={<FaSignOutAlt/>}/>
        
    </div>
  )
}

export default Sidebar