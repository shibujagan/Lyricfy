import React,{useState,useEffect} from 'react'
import apiClient from "../../Spotify/Spotify";
import { useNavigate } from 'react-router-dom';
import './trending.css'



function Trending() {

const [newReleases, setNewReleases] = useState([]);

useEffect(() => {

  apiClient
  .get(`/browse/new-releases `)
  .then((res) => {
    const a = res.data?.albums.items.slice(0, 20);
   setNewReleases(a);
  })
  .catch((err) => console.error(err));

}, []);

const navigate = useNavigate()

const MadePlaylist = (id) => {
  navigate("/player", { state: { id: id } });
  console.log(MadePlaylist);
};


  return (
    <div className='screen-container'>
       <div className='song-card'>
       {newReleases?.map((trending) => (
          <div className="album-cover"
           
            key={trending.id}
            onClick={() => MadePlaylist(trending.id)}
>
            <img src={trending?.images[0]?.url} className='body__info'alt='playing'/>
            
        <strong className='playlist-label'>TRENDING</strong>
        <div className="song-info">
        
        <p className='song-description'>
            {trending?.description}
            </p>
            
      </div>   
          </div>
        ))}
    </div>
    </div>
  )
}

export default Trending